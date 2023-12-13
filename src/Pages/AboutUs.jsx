import { Heading, Box, Text } from "@chakra-ui/react";

function AboutUs() {

const paragraphStyle = {
        textAlign: 'justify'
    };
    return (
            < Box p="4">
            <Heading as="h2" size="lg" mb="4">
                     Descripción de la app!
           </Heading>
             <Text style={paragraphStyle} mb="4">
                  La utilidad de mi aplicación de gestión de tareas radica en su capacidad para facilitar la   
                  organización de tu vida diaria y garantizar que cumplas con todas tus responsabilidades. 
                  Esta herramienta te permite estructurar listas de tareas, insertar nuevas actividades, modificar las 
                  existentes, suprimir aquellas que ya no son pertinentes y marcar las que has finalizado. 
                  Asimismo, la aplicación te proporciona un recuento actualizado de las tareas pendientes y te alerta 
                  si intentas ingresar una tarea que es excesivamente breve. Añadir información adicional a cada tarea 
                  es opcional, aunque la posibilidad está disponible para proporcionar detalles extra cuando lo consideres
                 necesario.
</Text>
             <Heading as="h2" size="lg" mb="4">
                  Cómo usar la aplicación
            </Heading>
             <Text style={paragraphStyle} mb="4">
                Para emplear la aplicación, inicia creando una lista de tareas y añade las actividades que desees gestionar.
                En cualquier momento, tienes la flexibilidad de editar, eliminar o marcar las tareas como completadas. 
                La aplicación te proporcionará constantemente el recuento de tareas pendientes, brindándote una visión clara 
                de la carga de trabajo que tienes por delante.
</Text>
             
             <Heading as="h2" size="lg" mb="4">
                   Tecnologías aplicadas
             </Heading>
             
             <Text style={paragraphStyle} mb="4">
                   La aplicación de lista de tareas se implementó con las siguientes tecnologías:
               </Text>
             <Text style={paragraphStyle} mb="4">
                  HTML5
             </Text>
             <Text style={paragraphStyle} mb="4">
                 JavaScript
            </Text>
             <Text style={paragraphStyle} mb="4">
                CSS
            </Text>
             <Text style={paragraphStyle} mb="4">
                React
             </Text>
             
        </Box>
    )
  }
export default AboutUs;

