<script setup>
import Accordion from 'primevue/accordion';
</script>

<template>
    <div class="grid">
        <div class="col-12 md:col-6">
            <div class="card">
                <h5>Planillas</h5>
                <Accordion>
                    <AccordionTab header="¿Cómo puedo declarar mi planilla mensual fuera de plazo?">
                        <p class="line-height-3 m-0">
                            Buenos días:
                            Recordarle que la declaración de planillas de retroactivos se encuentra habilitada del 01 al
                            15 de cada mes posterior al mes declarado, en este sentido si usted no logro realizar la
                            declaración en este periodo, es necesario que descargue desde la pagina del Ministerio de
                            Trabajo, Empleo y Previsión Social: https://www.mintrabajo.gob.bo/?page_id=1846 en este
                            link, en la pestaña "REQUISITOS PARA LA PRESENTACIÓN FUERA DE PLAZO Y CON MULTAS PLANILLAS
                            MENSUALES " podrá descargar un formulario y una planilla base para ser llenadas manualmente
                            y posteriormente debe aproximarse a la Jefatura de Trabajo de su región o departamento, para
                            poder declarar las planillas con retraso y multas correspondientes.
                            SALUDOS.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="¿Cómo puedo Rectificar mis planillas?">
                        <p class="line-height-3 m-0">
                            Buenos días.
                            Estimado usuario, para realizar la rectificación de Planillas, debe dirigirse a la Oficina
                            Virtual de Tramites OVT al apartado de Planillas ahí puede elegir la planilla que desea
                            rectificar, también informarle que este tramite tiene otro costo. Favor revisar la
                            Resolución Ministerial 152/24
                            https://www.mintrabajo.gob.bo/wp-content/uploads/2024/02/rm-152-24.pdf
                        </p>
                    </AccordionTab>
                    <AccordionTab header="La OVT no me permite validar nuevos trabajadores ¿Qué puedo hacer?">
                        <p class="line-height-3 m-0">
                            Buenas días

                            Para que el equipo técnico pueda atender su solicitud, debe adjuntar su planilla en el
                            formato correspondiente CSV, las capturas de pantalla del error que indica y un número de
                            contacto para llamarle en caso que fuese necesario al correo soporteovt@mintrabajo.gob.bo,
                            ya que es el medio oficial de atención de soporte técnico del OVT.

                            Saludos
                        </p>
                    </AccordionTab>
                    <AccordionTab
                        header="No puedo visualizar mi planilla declarada en la bandeja de Documentos ¿Qué puedo hacer?">
                        <p class="line-height-3 m-0">
                            Buenos días

                            En atención a su solicitud, se realizó la verificación del estado de su planilla, en el que
                            se identificó que esta declarada de forma correcta en el OVT. Se recomienda revisar su
                            bandeja de DOCUMENTOS en el OVT pasando la fecha límite de declaración de planillas.

                            Saludos
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Como declarar una planilla en cero, sinmovimiento">
                        <p class="line-height-3 m-0">
                            Buenas tardes.

                            Estimado usuario, para realizar una declaración en cero (sin movimiento)
                            -Ingrese a la Oficina Virtual de Tramites
                            -Ingrese a planillas, mensual
                            -Ingrese al mes, verifique que no tenga trabajadores registrados
                            -Precione volver al mes, y declarar mes. le aparecera un mensaje si esta de acuerdo en
                            declarar la planilla en cero (sin movimiento), acepte.
                            -Registre la boleta y concluya con la declaración
                            Con este procedimiento, su Roe queda inactivo y a espera de nuevas planillas.

                            Saludos, soporte OVT.
                        </p>
                    </AccordionTab>
                    <AccordionTab
                        header="Me salen errores en la planilla al momento de la importación en el OVT ¿Qué puedo hacer?">
                        <p class="line-height-3 m-0">
                            Buenos días

                            Para que el equipo técnico pueda atender su solicitud, debe adjuntar su planilla en el
                            formato correspondiente CSV, las capturas de pantalla del error que indica y un número de
                            contacto para llamarle en caso que fuese necesario al correo soporteovt@mintrabajo.gob.bo,
                            ya que es el medio oficial de atención de soporte técnico del OVT.

                            Saludos
                        </p>
                    </AccordionTab>
                    <AccordionTab
                        header="Error en los datos de mi personal, pero todo esta correcto según su carnet de identidad">
                        <p class="line-height-3 m-0">
                            Buenos días
                            Aparentemente existe algun error en el llenado de los datos en la planilla. Favor adjuntar
                            su planilla CSV incluyendo los documentos de identidad de las personas con la observación
                            para realizar su revisión.
                            Se recomienda que los datos sean llenados sin espacios por demás.

                            Saludos
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Error en los datos de mi personal extranjero">
                        <p class="line-height-3 m-0">
                            Buenos días:

                            Aparentemente existe algun error en el llenado de los datos en la planilla. Favor adjuntar
                            su planilla CSV incluyendo los documentos de identidad de las personas con la observación
                            para realizar su revisión.
                            Se recomienda que los datos sean llenados sin espacios por demás, no debe incluir el
                            apellido de casada ni la E- en la cedulas de identidad extranjeras, el número de documento a
                            introducir debe contener todos los 0, en caso de no poder realizar el cambio en el CSV
                            elimine el registro del CSV y añadalo manualmente por la plataforma de OVT.

                            Saludos.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Los encabezados no coinciden con los de la planilla preestablecida">
                        <p class="line-height-3 m-0">
                            Buenas tardes.

                            El modelo de planilla en el cual deberá llenar los campos correspondientes se encuentra en
                            el siguiente enlace:
                            https://test.agetic.gob.bo/mintrabajo/mintrabajo-api/generar_planilla?tipoPlanilla=OVTDJ-T02,
                            y el manual de llenado es:
                            https://test.agetic.gob.bo/mintrabajo/mintrabajo-api/manuales?nombre=OVTDJ-T02
                            posteriormente guardarlo como csv delimitado por comas y cargarlo de esta forma en la
                            plataforma.
                            Si el problema continua por favor envienos un numero de contacto, ademas de tener instalado
                            el programa Anydesk en su equipo para poder hacer la asistencia en linea.

                            Saludos.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Modificar el Tipo de declaración de planillas">
                        <p class="line-height-3 m-0">
                            Buenas Tardes:

                            La oficina Virtual de Tramites no determina el tipo de declaración, la opción de elegir
                            entre consolidada o por sucursal lo determinan todas las personas que tuvieran acceso a su
                            Oficina Virtual de Tramites y lamentablemente esta opción no es subsanable.0
                            Si gusta tener mas información al respecto comuníquese con el teléfono 2408606 interno 2137.

                            Saludos.
                        </p>
                    </AccordionTab>
                    <AccordionTab
                        header="Necesito declarar las planillas en la OVT pero no me salen las demás sucursales.">
                        <p class="line-height-3 m-0">
                            Buenas tardes:

                            En atención a su solicitud, realizamos la revisión de su ROE de acuerdo al número de NIT
                            proporcionado, es en ese sentido que se identificó que no le aparecen las planillas para
                            declarar de las nuevas sucursales registradas en su ROE, esto se debe a que la empresa
                            realizó el registro de estas sucursales dentro del periodo de declaración de planillas, por
                            lo tanto las planillas de estas nuevas sucursales se habilitarán en el siguiente periodo de
                            declaración.

                            Saludos.
                        </p>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
        <div class="col-12 md:col-6">
            <div class="card">
                <h5>ROE</h5>
                <Accordion>
                    <AccordionTab header="¿Cual es la normativa vigente para presentacion de planillas y para el ROE?">
                        <p class="line-height-3 m-0">
                            Buenos tardes

                            Se recuerda que este correo es solo para atención de solicitudes técnicas con respecto a la
                            OVT por favor le solicitamos pueda comunicarse al 2408606 int 2137 para resolver mejor sus
                            dudas.

                            Saludos
                        </p>
                    </AccordionTab>
                    <AccordionTab header="¿Como puedo actualizar mi ROE?">
                        <p class="line-height-3 m-0">
                            Buenas tardes.
                            Las empresas y/o entidades pueden realizar la actualizacion de su ROE a traves
                            de la plataforma OVT. Para mas informacoin consultar con el siguiente enlace:
                            https://ovt.mintrabajo.gob.bo/soporte/
                            Saludos
                        </p>
                    </AccordionTab>
                    <AccordionTab header="La OVT no me permite actualizar los datos del ROE ¿Qué puedo hacer?">
                        <p class="line-height-3 m-0">
                            Buenos días

                            Para que el equipo técnico pueda atender su solicitud, debe adjuntar las capturas de
                            pantalla del error que indica y un número de contacto para llamarle en caso que fuese
                            necesario al correo soporteovt@mintrabajo.gob.bo, ya que es el medio oficial de atención de
                            soporte técnico del OVT.

                            Saludos
                        </p>
                    </AccordionTab>
                    <AccordionTab
                        header="Solicitudes en los cuales no les llega el correo de activacion de cuenta de ROE">
                        <p class="line-height-3 m-0">
                            Buenas tardes

                            Intente nuevamente por favor, caso contrario ingrese un correo gmail y verifique su bandeja
                            de spam.

                            Saludos.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="¿Como puedo dar de baja o cerrar mi ROE?">
                        <p class="line-height-3 m-0">
                            Buenos Tardes:
                            El ROE es un documento de sistema administrativo, que no se puede dar de baja, para que el
                            mismo entre en un estado de ""ESPERA DE NUEVAS PLANILLAS"", es decir el mismo se encuentre
                            en un periodo indefinido en el cual no sea necesaria la presentación de planillas mensuales,
                            ni ningún otro tipo de planillas debe realizar los siguientes pasos:
                            1. Retirar a todos sus trabajadores como corresponde en la declaración de la planilla
                            mensual.
                            2. Al mes siguiente presentar una planilla en cero o vacía.
                            Con esto el ROE entrara en un estado de espera de nuevas planillas si es que en lo posterior
                            volvería a contar con trabajadores, caso contrario continuara en este estado de espera
                            indefinidamente.
                            Para tramites administrativos normativos por ley , comunicarse al 2408606 int 2137 para
                            resolver mejor sus dudas.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="NO PUDE CONCLUIR EL REGISTRO DE ROE POR ALGUN ERROR">
                        <p class="line-height-3 m-0">
                            Buenos días.

                            Para concluir la declaración del ROE, cierre todo y vuelva a ingresar a la plataforma OVT
                            posteriormente haga clic en el icono del lapiz del mensaje REGISTRO INCONCLUSO esto para
                            continuar con el registro y obtener su certificado ROE.

                            Saludos
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Cuantas veces se debe actualizar el ROE">
                        <p class="line-height-3 m-0">
                            Buenos días

                            El ROE se debe actualizar cada vez que usted actualiza información desatacada del mismo es
                            decir NOMBRE DEL REPRESENTANTE LEGAL O DIRECCION, en este sentido no hay numero limitado de
                            actualizaciones o restricciones.
                            Si aun se encuentra pendiente de firma esto se debe a la gran cantidad de solicitudes que
                            existen pendientes y se las va firmando por orden de actualización o de inscripción, aunque
                            a pesar de la falta de firma en el ROE este certificado es un documento totalmente valido
                            debido a que al momento de generarlo usted realiza una declaración jurada en la cual usted
                            jura la veracidad de la información detallada en el certificado ROE.

                            Saludos.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Cambio de domicilio legal">
                        <p class="line-height-3 m-0">
                            Buenos días

                            Para actualizar cualquier dato el primer paso es realizar esta modificación en su Matricula
                            de Comercio, para esto debe dirigirse a SEPREC, posterior a ello debe de realizar la
                            actualización directamente en la OVT.

                            Deberá dirijirse a la opción ROEen el menú lateral izquierdo, dar click sobre el botón con
                            el nombre de su empresa y finalmente presionar el botón ""Actualizar información"".

                            Esto jalará de manera automática todos los valores registrados y actualizará los campos con
                            los valores ya modificados, presione ""Guardar"" y la actualización habrá finalizado.

                            Saludos.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Cuánto tiempo tengo para registrar al ROE,despues de emision del NIT">
                        <p class="line-height-3 m-0">
                            Buenos días.

                            Segun la resolución ministerias N°105/18 el plazo de incripción al Registro Obligatorio de
                            Empleados (ROE) es de 30 días habilies despues de haber aperturado el NIT.

                            Saludos.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Error Interno">
                        <p class="line-height-3 m-0">
                            Buenos días:

                            Estimado usuario, favor de enviarnos los siguientes archivos:
                            -Certicado de SEPREC actualizado.
                            -Certificado de Inscripción a Impuestos Nacionales.
                            -NIT.
                            -Captura de pantalla del error legible.
                            -Número de contacto (celular).

                            Saludos.
                        </p>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
        <div class="col-12 md:col-6">
            <div class="card">
                <h5>RM 152/24 y RM 105/18</h5>
                <Accordion>
                    <AccordionTab
                        header="MULTA DE INCUMPLIMIENTO A LA INSCRIPCION DE REGISTRO OBLIGATORIO DE EMPLEADORES ">
                        <p class="line-height-3 m-0">
                            Buenos días

                            Estimado usuario, queremos informarle sobre la multa relacionada con la inscripción al
                            Registro Obligatorio de Empleadores (ROE), respaldada por la Resolución Ministerial 105/18.
                            Esta resolución establece los plazos para la inscripción en el ROE, se le sugiere verifique
                            si cuenta con multa en el apartado de Multas en el menú lateral izquierdo. Si cuenta con
                            multa no podrá actualizar ni imprimir su ROE.

                            Si usted cree que esta multa no aplica en su caso, por favor, comuníquese al número 2408606
                            INT 2137 o visita el Ministerio de Trabajo, al Área Legal más cercana a su región para
                            recibir asistencia.

                            Saludos.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="¿A QUÉ CUENTA DEBO REALIZAR EL DEPÓSITO DE LA MULTA DEL ROE?">
                        <p class="line-height-3 m-0">
                            Buenos días

                            El número de cuenta es el: 1-6036425 por Trámite: Multa de Incumplimiento Plazo ROE.

                            El depósito debe realizarse de manera física, el sistema no considera transferencias por
                            internet, una vez realizado el depósito debe esperar 3 horas para que le reconozca el
                            depósito el sistema.

                            Si tiene alguna otra consulta o inconveniente no dude en comunicarse con nosotros.

                            Atentamente
                            Soporte O.V.T.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Fecha de inicio de actividades incorrecta">
                        <p class="line-height-3 m-0">
                            Buenos días

                            Estimado usuario, le informamos que esa fecha se coloca por defecto en sistema si usted
                            seleccionó la opción ""No cuenta con trabajadores"" al momento de inscribir su ROE, la misma
                            fecha se actualizará el momento en que su empresa cuente con trabajadores con la fecha de
                            ingreso de su trabajador. Este dato no le afecta ya que en su certificado de ROE esta fecha
                            no figura, le sugerimos terminar con su resgistro. Si tiene alguna otra duda o consulta
                            comuníquese con nosotros nuevamente por este medio o mándenos su número de contacto para que
                            podamos comunicarnos con usted.

                            Atentamente
                            Soporte O.V.T.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Advertencia: carnet de identidad observado Registro sin validación">
                        <p class="line-height-3 m-0">
                            Buenos días/Buenas tardes.

                            Estimado usuario, el mensaje que le aparece (Registro sin Validación) es solo una
                            advertencia la cual no impide que pueda continuar con el registro de su(s) empleado(s) le
                            pedimos pueda llenar todos los campos requeridos y posteriormente presionando el botón
                            ""GUARDAR"".

                            En caso no pudiera concluir con el proceso, vuelva a contactarse con nosotros.

                            Saludos
                            Soporte O.V.T.
                        </p>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
        <div class="col-12 md:col-6">
            <div class="card">
                <h5>Contraseña y otros</h5>
                <Accordion>
                    <AccordionTab header="Solicitud de cambio de usuario y/o contraseña del ovt">
                        <p class="line-height-3 m-0">
                            Buenos días

                            La plataforma OVT cuenta con un servicio de interoperabilidad automático con el Servicio de
                            Impuestos Nacionales - SIN a través de las credenciales de acceso de la tarjeta MASI y el
                            Número de Identificación Tributaria - NIT otorgada por esa entidad. Si desea reestablecer
                            sus contraseñas, debe solicitarlo en dependencias del Servicio de Impuestos Nacionales, las
                            mismas le permitirán acceder a la plataforma OVT.

                            Saludos
                        </p>
                    </AccordionTab>
                    <AccordionTab
                        header="¿Qué puedo hacer si mis trámites en el OVT (ROE, DDJJ planillas) aún estan pendiente de firma ?">
                        <p class="line-height-3 m-0">
                            Buenos días:
                            Informarle que los documentos generados en la Oficina Virtual de Trámites OVT son
                            Declaraciones Juradas y válidas para cualquier tipo de trámite así estén ""PENDIENTE DE
                            FIRMA"", informarle también que la firma de esos documentos puede demorar sin embargo debe
                            consultar a la Jefatura Departamental o Regional de Trabajo a la que pertenece para mayor
                            información.

                            Saludos.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="¿SE PUEDE DESVINCULAR TRABAJADORES EN EL SISTEMA?">
                        <p class="line-height-3 m-0">
                            Buenos días

                            Para desvincular trabajadores en el sistema, debe llenar o cargar primeramente sus
                            trabajadores.
                            • Posteriormente, debe hacer clic en el icono en forma de “persona” que se encuentra al lado
                            del nombre de los trabajadores Le aparecerá un pequeño formulario donde ingresará la fecha y
                            el motivo
                            de desvinculación.

                            Saludos.
                        </p>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    </div>
</template>