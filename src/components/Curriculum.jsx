import React from 'react'
import '../styles/curriculum.css'
import img1 from '../assets/img1.webp'
import Pdf1 from '../assets/ejemplo-cv-1.pdf';
import Pdf2 from '../assets/ejemplo-cv-2.pdf';
import Pdf3 from '../assets/ejemplo-cv-3.pdf';


const Curriculum = () => {
  return (
    <div id='cv'>
        <div id='cvContainer'>
            <h2>CURRÍCULUM VITAE</h2>
            <div id='cvText'>
                <div className='part'>
                    <h3>Redacción de Currículums</h3>
                    <div className='divImgRight'>
                        <p>
                            Un currículum es un documento que utilizas como buscador de empleo para resaltar tus habilidades, capacidades y conocimientos ante un posible empleador. Se basa en tus experiencias y logros pasados para posicionarte para futuras oportunidades.<br/><br/>
                            Desde la perspectiva del empleador, los currículums se utilizan para identificar candidatos calificados a quienes invitar a una entrevista. Si bien los currículums no generan ofertas de trabajo, un currículum bien redactado facilita la obtención de entrevistas. Es una herramienta de marketing en el proceso de búsqueda laboral.<br/><br/>
                            El currículum es importante, pero es solo uno de los varios pasos necesarios para una búsqueda de empleo exitosa.
                        </p>
                        <img src={img1} alt="Imagen de curriculum vitae en una mesa"/>
                    </div>
                </div>
                <div className='part'>
                    <h3>Cosas a Tener en Cuenta Antes de Comenzar</h3>
                    <ul className='list'>
                        <li><strong>Tiempo de Visualización:</strong> Tu currículum estará en una pila de documentos que solo será revisada durante unos 30 segundos.</li>
                        <li><strong>Sistemas de Seguimiento de Solicitudes:</strong> Los sistemas de seguimiento analizan currículums en busca de palabras clave que coincidan con las descripciones de trabajo de la empresa. Asegúrate de incluir palabras que se alineen con la descripción del puesto. La falta de estas palabras clave puede llevar al rechazo de tu currículum.</li>
                        <li><strong>Sé Específico:</strong> No te limites a enumerar funciones de trabajos anteriores. En su lugar, destaca tus logros y los problemas que resolviste.</li>
                        <li><strong>Honestidad:</strong> No mientas ni exageres. Los empleadores verificarán tus referencias.</li>
                        <li><strong>Información Previa:</strong> Reúne toda tu información personal y datos relevantes antes de empezar a redactar tu currículum.</li>
                        <li><strong>Secciones por Separado:</strong> Trabaja en tu currículum sección por sección.</li>
                        <li><strong>Variedad en el Vocabulario:</strong> Usa un diccionario para evitar la repetición de palabras.</li>
                        <li><strong>Reglas de escritura:</strong> Evita pronombres en primera persona como “yo” o “nosotros”. Mantén las oraciones cortas; los fragmentos de oraciones son aceptables.</li>
                    </ul>
                </div>
                <div className='part'>
                    <h3>Recomendaciones</h3>
                    <ul className='list'>
                        <li><strong>Fuente Estándar:</strong> Elige una fuente estándar como Times New Roman, Arial o Helvetica.</li>
                        <li><strong>Tamaño de Fuente:</strong> Mantén el tamaño de la fuente entre 11 y 16 puntos. (Se recomienda 11 px. solo si deseas que tu currículum ocupe una sola página).</li>
                        <li><strong>Extensión:</strong> El currículum debe tener una sola página; cada línea es valiosa.</li>
                        <li><strong>Formato del archivo:</strong> Se recomienda que el curriculum sea un pdf.</li>
                    </ul>
                </div>
                <hr className='separation'/>
                <div className='part'>
                    <div id='h3Components'>
                        <h3>COMPONENTES DE UN BUEN RESUMEN</h3>
                    </div>
                    <div className='textosEntrelazados'>
                        <div className='texto1'>
                            <h4>Información Personal</h4>
                            <p>Tu nombre, dirección, ciudad, estado, número de celular (profesional) y correo electrónico (profesional) deben ser visibles y estar centrados en la parte superior de la página.</p>
                        </div>
                        <div className='texto2'>
                            <h4>Objetivo (opcional)</h4>
                            <p>No todos los empleadores requieren un objetivo. Este identifica la posición que estás buscando. Inclúyelo cuando apliques para un puesto específico.</p>
                        </div>
                        <div className='texto1'>
                            <h4>Calificaciones Destacadas</h4>
                            <p>Esta sección tiene un impacto inmediato y es tu primera impresión. Debe alinear tus habilidades con la descripción del trabajo objetivo. Personaliza esta sección para cada puesto al que postules, colocando las palabras más importantes primero.</p>
                        </div>
                        <div className='texto2'>
                            <h4>Experiencia</h4>
                            <p>Usa encabezados separados para “Prácticas” y “Experiencia Laboral”. Lista en orden cronológico inverso, especificando el nombre del empleador, ciudad, estado, título del trabajo y fechas de empleo. Utiliza verbos de acción para describir tus tareas, destacando logros y habilidades.</p>
                        </div>
                        <div className='texto1'>
                            <h4>Educación</h4>
                            <p>Lista toda tu experiencia educativa en orden cronológico inverso, incluyendo nombre de la institución, ciudad, estado, título obtenido y fecha de graduación. También puedes incluir cursos relevantes, menciones honoríficas y becas.</p>
                        </div>
                        <div className='texto2'>
                            <h4>Actividades (opcional)</h4>
                            <p>La participación en actividades extracurriculares demuestra habilidades de liderazgo, gestión del tiempo y organización. Incluye organizaciones, voluntariado, participación comunitaria y equipos deportivos. Si has tenido un puesto de liderazgo, asegúrate de mencionarlo.
                            </p>
                        </div>
                        <div className='texto1'>
                            <h4>Referencias (opcional)</h4>
                            <p>Crea una página separada de referencias para llevar a la entrevista, incluyendo nombre, título, organización, dirección, número de teléfono y correo electrónico de cada referencia. Incluye solo a personas que hayan aceptado servir como referencias.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='part'>
                    <h3>Hoja de Trabajo de Logros</h3>
                    <p>Los profesionales de contratación ya conocen las responsabilidades laborales; tu currículum debe resaltar tus logros en cada puesto. Al evaluar tus experiencias pasadas, considera lo siguiente:
                    </p>
                    <ol className='list'>
                        <li><strong>Sé Específico:</strong> Intenta listar logros que sean concretos y cuantificables.</li>
                        <li><strong>Cuantifica Siempre que Sea Posible:</strong> Ejemplos: "Aumenté las ventas en un 50% en comparación con el año anterior"; "Construí una base de clientes de 150, la más grande en el equipo de atención al cliente de la empresa".</li>
                        <li><strong>Usa Superlativos y "Primeros":</strong> Utiliza palabras como “primero”, “único”, “mejor”, “más”, y “más alto”.</li>
                        <li><strong>Considera el la relevancia:</strong> Para cada logro que enumeres, pregúntate: ¿El elemento que has listado realmente caracteriza tus habilidades y tu potencial para contribuir al éxito de tu próximo empleador?
                        </li>
                    </ol>
                    <p>A continuación, se presentan una serie de preguntas que puedes considerar al evaluar tus experiencias laborales:</p>
                    <ol className='list'>
                        <li>¿Qué cosas especiales hiciste para diferenciarte? ¿Cómo realizaste el trabajo mejor que nadie más?</li>
                        <li>¿Qué hiciste para hacer de este trabajo algo propio? ¿Cómo tomaste la iniciativa? ¿Cómo superaste lo que se esperaba de ti según tu descripción de trabajo?</li>
                        <li>¿Qué hiciste para impresionar a tu jefe y obtener una promoción?¿Fuiste promovido? Las promociones rápidas o frecuentes pueden ser especialmente significativas.</li>
                        <li>¿De qué estás más orgulloso en este trabajo?</li>
                        <li>¿Qué evidencia tangible tienes de tus logros? Ejemplos: publicaciones producidas, productos desarrollados, aplicaciones de software escritas.</li>
                        <li>¿Cómo contribuíste a la eficiencia operativa en este trabajo? ¿A través de qué porcentajes de reducción de costos? ¿Cómo ayudaste a la empresa a ahorrar dinero, tiempo o a hacer el trabajo más fácil?</li>
                        <li>¿Cómo contribuiste a la productividad? Ejemplo: ¿Motivaste exitosamente a tu equipo?</li>
                        <li>¿Cómo construiste relaciones o mejoraste la imagen con partes interesadas internas o externas? ¿Cómo atraíste nuevos clientes o retuviste a los existentes?</li>
                        <li>¿Cómo resolviste uno o más problemas específicos en este trabajo? ¿Cuáles fueron los problemas o desafíos que enfrentaste? ¿Qué hiciste para superarlos?</li>
                    </ol>
                    <p><strong>Consejo:</strong> Describe una Situación o Problema que existió en un trabajo determinado, explicas qué Acción tomaste para solucionarlo y cuál fue el Resultado.</p>
                </div>
                <div className='part'>
                    <h3>Afirmaciones Generales vs. Logros Concretos</h3>
                    <ol className='list'>
                        <li>"Experiencia en entornos de ritmo acelerado" vs. "Registro de más de 120 pacientes de emergencias en turno nocturno cada noche."</li>
                        <li>"Habilidades excepcionales de comunicación escrita" vs. "Redacté una guía de usuario sin jerga técnica para 11.000 usuarios."</li>
                        <li>"Capacidad de trabajo en equipo y habilidades multifuncionales" vs. "Colaboré con clientes, cuentas por cobrar y ventas para agilizar el proceso de cobros y evitar la interrupción de servicios."</li>
                        <li>"Éxito demostrado en el análisis de necesidades del cliente" vs. "Desarrollé e implementé un mecanismo integral de evaluación de necesidades que ayudó a pronosticar la demanda de servicios y personal."</li>
                    </ol>
                    <h4>Ejemplo General:</h4>
                    <p>Responsable de Préstamos Comerciales<br/>Septiembre 2005 - Presente<br/>Lotsa Bucks Trust, St. Louis, MO</p>
                    <ol className='list'>
                        <li>Procesaba solicitudes de préstamos comerciales y de construcción.</li>
                        <li>Negociaba términos de préstamos.</li>
                        <li>Supervisaba a cinco empleados en la división de préstamos comerciales.</li>
                        <li>Capacitación a nuevos empleados en métodos de investigación de préstamos.</li>
                    </ol>
                    <h4>Buen Ejemplo / Ejemplo Concreto:</h4>
                    <p>Responsable de Préstamos Comerciales<br/>Septiembre 2005 - Presente<br/>Lotsa Bucks Trust, St. Louis, MO</p>
                    <ol className='list'>
                        <li>Gestioné solicitudes de préstamos comerciales y de construcción por un valor total de $10 mil millones para el mayor prestamista comercial en el este de Missouri.</li>
                        <li>Dirigí un equipo de cinco analistas de préstamos, quienes superaron las metas del departamento de forma consistente durante los últimos seis meses.</li>
                        <li>Organicé y dirigí capacitaciones profesionales sobre métodos de investigación de préstamos, reduciendo el tiempo de adaptación de los nuevos empleados.</li>
                    </ol>
                </div>
                <div id='ejemplos'>
                    <h3>Ejemplos de CV</h3>
                    <p>Ten en cuenta que no existe un único modelo o diseño de currículum. Lo explicado anteriormente son recomendaciones que te ayudarán a crear un currículum vitae atractivo para los empleadores. A continuación encontraras pdfs con ejemplos para descargar.</p>
                    <div id='pdfs'>
                        <a className='pdfEjemplo' href = {Pdf1}>Ejemplo 1 - pdf</a>
                        <a className='pdfEjemplo' href = {Pdf2}>Ejemplo 2 - pdf</a>
                        <a className='pdfEjemplo' href = {Pdf3}>Ejemplo 3 - pdf</a>
                    </div>
                </div>
            </div>
        </div>
        <hr className='hr'/>
    </div>
  )
}

export default Curriculum