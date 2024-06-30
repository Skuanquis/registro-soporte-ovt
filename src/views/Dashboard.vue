<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
/*import { onMounted, reactive, ref, watch } from 'vue';*/
import { ref, watch } from 'vue';
import { useLayout } from '@/layout/composables/layout';


const { layoutConfig } = useLayout();
let documentStyle = getComputedStyle(document.documentElement);
let textColor = documentStyle.getPropertyValue('--text-color');
let textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
let surfaceBorder = documentStyle.getPropertyValue('--surface-border');

const lineData = ref(null);
const pieData = ref(null);
const doughnutData = ref(null);
const polarData = ref(null);
const barData = ref(null);
const radarData = ref(null);

const lineOptions = ref(null);
const pieOptions = ref(null);
const doughnutOptions = ref(null);
const polarOptions = ref(null);
const barOptions = ref(null);
const radarOptions = ref(null);

const setColorOptions = () => {
    documentStyle = getComputedStyle(document.documentElement);
    textColor = documentStyle.getPropertyValue('--text-color');
    textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    surfaceBorder = documentStyle.getPropertyValue('--surface-border');
};

const setChart = () => {
    barData.value = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',],
        datasets: [
            {
                label: 'Correo',
                backgroundColor: documentStyle.getPropertyValue('--primary-700'),
                borderColor: documentStyle.getPropertyValue('--primary-700'),
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'Telefono',
                backgroundColor: documentStyle.getPropertyValue('--primary-400'),
                borderColor: documentStyle.getPropertyValue('--primary-400'),
                data: [28, 48, 40, 19, 86, 27, 90]
            },
            {
                label: 'Presencial',
                backgroundColor: documentStyle.getPropertyValue('--primary-200'),
                borderColor: documentStyle.getPropertyValue('--primary-200'),
                data: [18, 25, 75, 24, 28, 100, 17]
            }
        ]
    };
    barOptions.value = {
        plugins: {
            legend: {
                labels: {
                    fontColor: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary,
                    font: {
                        weight: 500
                    }
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };

    pieData.value = {
        labels: ['Mensual', 'Retroactivo', 'Rectificación'],
        datasets: [
            {
                data: [540, 325, 702],
                backgroundColor: [documentStyle.getPropertyValue('--indigo-500'), documentStyle.getPropertyValue('--purple-500'), documentStyle.getPropertyValue('--teal-500')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--indigo-400'), documentStyle.getPropertyValue('--purple-400'), documentStyle.getPropertyValue('--teal-400')]
            }
        ]
    };

    pieOptions.value = {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: textColor
                }
            }
        }
    };

    doughnutData.value = {
        labels: ['Con asistencia remota', 'Sin asistencia remota'],
        datasets: [
            {
                data: [540, 320],
                backgroundColor: [documentStyle.getPropertyValue('--indigo-500'), documentStyle.getPropertyValue('--purple-500'), documentStyle.getPropertyValue('--teal-500')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--indigo-400'), documentStyle.getPropertyValue('--purple-400'), documentStyle.getPropertyValue('--teal-400')]
            }
        ]
    };

    doughnutOptions.value = {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: textColor
                }
            }
        }
    };

    lineData.value = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
        datasets: [
            {
                label: 'Casos solucionados',
                data: [65, 59, 80, 81, 56, 55, 40, 23, 45, 12, 65, 59, 80, 81, 56, 55, 40, 23, 45, 12, 65, 59, 80, 81, 56, 55, 40, 23, 45, 12, 74],
                fill: false,
                backgroundColor: documentStyle.getPropertyValue('--primary-700'),
                borderColor: documentStyle.getPropertyValue('--primary-700'),
                tension: 0.4
            },
            {
                label: 'Casos pendientes',
                data: [28, 48, 40, 19, 86, 27, 3, 42, 8, 65, 28, 48, 40, 19, 86, 27, 3, 42, 8, 65, 28, 48, 40, 19, 86, 27, 3, 42, 8, 65, 15],
                fill: false,
                backgroundColor: documentStyle.getPropertyValue('--primary-300'),
                borderColor: documentStyle.getPropertyValue('--primary-300'),
                tension: 0.4
            }
        ]
    };

    lineOptions.value = {
        plugins: {
            legend: {
                labels: {
                    fontColor: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };

    polarData.value = {
        datasets: [
            {
                data: [11, 24, 45],
                backgroundColor: [documentStyle.getPropertyValue('--indigo-500'), documentStyle.getPropertyValue('--purple-500'), documentStyle.getPropertyValue('--teal-500'), documentStyle.getPropertyValue('--orange-500')],
                label: 'My dataset'
            }
        ],
        labels: ['Correo', 'Telefono', 'Presencial']
    };

    polarOptions.value = {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            r: {
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };

    radarData.value = {
        labels: ['Planillas', 'ROE', 'Interoperabilidad', 'Credenciales', 'Otro'],
        datasets: [
            {
                label: 'Problemas',
                borderColor: documentStyle.getPropertyValue('--indigo-400'),
                pointBackgroundColor: documentStyle.getPropertyValue('--indigo-400'),
                pointBorderColor: documentStyle.getPropertyValue('--indigo-400'),
                pointHoverBackgroundColor: textColor,
                pointHoverBorderColor: documentStyle.getPropertyValue('--indigo-400'),
                data: [85, 79, 90, 81, 76]
            }
        ]
    };

    radarOptions.value = {
        plugins: {
            legend: {
                labels: {
                    fontColor: textColor
                }
            }
        },
        scales: {
            r: {
                grid: {
                    color: textColorSecondary
                }
            }
        }
    };
};

watch(
    layoutConfig.theme,
    () => {
        setColorOptions();
        setChart();
    },
    { immediate: true }
);
</script>

<template>
    <div class="grid">
        <div class="col-12 lg:col-6 xl:col-3">
            <div class="card mb-0">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Correos</span>
                        <div class="text-900 font-medium text-xl">152</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-blue-100 border-round"
                        style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-envelope text-blue-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">24 </span>
                <span class="text-500">pendientes</span>
            </div>
        </div>
        <div class="col-12 lg:col-6 xl:col-3">
            <div class="card mb-0">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Llamadas</span>
                        <div class="text-900 font-medium text-xl">54</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-orange-100 border-round"
                        style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-phone text-orange-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium"></span>
                <span class="text-500">nose que poner xD</span>
            </div>
        </div>
        <div class="col-12 lg:col-6 xl:col-3">
            <div class="card mb-0">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Presencial</span>
                        <div class="text-900 font-medium text-xl">10</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-cyan-100 border-round"
                        style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-building text-cyan-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">5 </span>
                <span class="text-500">resueltos</span>
            </div>
        </div>
        <div class="col-12 lg:col-6 xl:col-3">
            <div class="card mb-0">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Hojas de ruta</span>
                        <div class="text-900 font-medium text-xl">1 registrada</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-purple-100 border-round"
                        style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-file text-purple-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium"> </span>
                <span class="text-500">F</span>
            </div>
        </div>
    </div>
    <div class="grid p-fluid">
        <div class="col-12 xl:col-6">
            <div class="card">
                <h5>Casos atendidos en el mes</h5>
                <Chart type="line" :data="lineData" :options="lineOptions"></Chart>
            </div>
        </div>
        <div class="col-12 xl:col-6">
            <div class="card">
                <h5>Tipos de atención</h5>
                <Chart type="bar" :data="barData" :options="barOptions"></Chart>
            </div>
        </div>
        <div class="col-12 xl:col-6">
            <div class="card flex flex-column align-items-center">
                <h5 class="text-left w-full">Inconvenientes declaracion de planillas (Necesitamos ideas)</h5>
                <Chart type="pie" :data="pieData" :options="pieOptions"></Chart>
            </div>
        </div>
        <div class="col-12 xl:col-6">
            <div class="card flex flex-column align-items-center">
                <h5 class="text-left w-full">Inconvenientes en el ROE (Necesitamos ideas x2)</h5>
                <Chart type="pie" :data="pieData" :options="pieOptions"></Chart>
            </div>
        </div>
        <div class="col-12 xl:col-6">
            <div class="card flex flex-column align-items-center">
                <h5 class="text-left w-full">Otros inconvenientes (Necesitamos ideas x3)</h5>
                <Chart type="pie" :data="pieData" :options="pieOptions"></Chart>
            </div>
        </div>
        <div class="col-12 xl:col-6">
            <div class="card flex flex-column align-items-center">
                <h5 class="text-left w-full">Casos solucionados</h5>
                <Chart type="doughnut" :data="doughnutData" :options="doughnutOptions"></Chart>
            </div>
        </div>
        <div class="col-12 xl:col-6">
            <div class="card flex flex-column align-items-center">
                <h5 class="text-left w-full">Total de casos atendidos</h5>
                <Chart type="polarArea" :data="polarData" :options="polarOptions"></Chart>
            </div>
        </div>
        <div class="col-12 xl:col-6">
            <div class="card flex flex-column align-items-center">
                <h5 class="text-left w-full">Frecuencia de problemas</h5>
                <Chart type="radar" :data="radarData" :options="radarOptions"></Chart>
            </div>
        </div>
    </div>
</template>

<style scoped></style>