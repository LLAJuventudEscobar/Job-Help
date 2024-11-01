import React from 'react'
import '../styles/linkedin.css'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpeg'



const Linkedin = () => {
  return (
    <div id='linkedin'>
        <div id='linkedinContainer'>
            <h2>LINKEDIN</h2>
            <div id='linkedinText'>
                <div className='part'>
                    <h3>¿Por qué tener un perfil de LinkedIn?</h3>
                    <div className='divImgRight'>
                        <p>
                        LinkedIn es una red social profesional donde personas de todo el mundo pueden conectarse con otros profesionales, encontrar oportunidades laborales y mostrar sus habilidades y experiencia profesional.<br/><br/>
                        Un perfil de LinkedIn es esencial para construir una presencia profesional en línea, ampliar su red  y hacerse visible para los reclutadores y las empresas que buscan talento. Además, es una herramienta útil para mantenerse actualizado sobre las tendencias de la industria y acceder a recursos que lo ayudarán a avanzar en su carrera.
                        </p>
                        <img src={img2} alt="Imagen de Linkedin"/>
                    </div>
                </div>
                <hr className='separation'/>
                <div className='part'>
                    <div id='h3Components'>
                        <h3>LAS PARTES DE UN PERFIL</h3>
                    </div>
                    <h3>Presentación</h3>
                    <div className='textosEntrelazados'>
                        <div className='texto1'>
                            <h4>Nombre y Apellido</h4>
                            <p>Incluye tu primer nombre, apellido y segundo nombre (si aplica). Este no es el lugar para apodos ni referencias humorísticas a títulos laborales.</p>
                        </div>
                        <div className='texto2'>
                            <h4>Titular</h4>
                            <p>¡Este es el aspecto más importante del perfil! Sé conciso, creativo e incluye términos clave que permitan a otros definir fácilmente tu industria y tu rol dentro de ella.<br/><br/>*No usar mas de 120 caracteres.</p>
                        </div>
                        <div className='texto1'>
                            <h4>URL</h4>
                            <p>Una URL limpia y personalizada para tu perfil no solo facilitará que otros te encuentren, sino que también demostrará profesionalismo y atención al detalle. Utiliza tu nombre y apellido si están disponibles, evitando números o caracteres innecesarios. Ejemplo: linkedin.com/in/tu-nombre.</p>
                        </div>
                        <div className='texto2'>
                            <h4>Foto de perfil</h4>
                            <div className='fotoDiv'>
                                <p>Tu foto de perfil es la primera impresión que tendrán las personas sobre ti. Asegúrate de que refleje tu rol profesional y se ajuste a los estándares de tu industria. Opta por una imagen en la que estés bien iluminado, con ropa acorde a tu sector, y un fondo sencillo. Evita fotos de vacaciones, fiestas o con gestos poco formales. Una foto profesional puede generar confianza y credibilidad.<br/><br/>*Usa la siguiente foto como referencia.
                                </p>
                                <img src={img3} alt="Ejemplo de foto para Linkedin" />
                            </div>
                        </div>
                        <div className='texto1'>
                            <h4>Foto de portada</h4>
                            <p>Si bien muchas personas no le prestan atención, la foto de portada también es una oportunidad para destacar. Puedes utilizar una imagen que represente tu campo profesional, como una ciudad simbólica si trabajas en tecnología o un esquema visual relacionado con tu sector. Es una buena forma de personalizar tu perfil y hacer que sea visualmente atractivo.</p>
                        </div>
                        <div className='texto2'>
                            <h4>Resumen</h4>
                            <p>El resumen es tu carta de presentación. Aquí tienes la oportunidad de contar tu historia profesional de manera atractiva. Sé claro, pero también personal: ¿Qué te motiva en tu carrera? ¿Qué aportas a las empresas o proyectos? Incluye habilidades clave y tus logros más importantes. Un buen resumen debe captar la atención y mostrar qué te diferencia del resto. Además, asegúrate de usar palabras clave que los reclutadores puedan estar buscando.</p>
                        </div>
                        <div className='texto1'>
                            <h4>Experiencia Laboral
                            </h4>
                            <p>La sección de experiencia debe ser más que una simple lista de trabajos anteriores. En cada posición, describe tus responsabilidades y, sobre todo, tus logros. Si puedes, añade datos cuantificables que demuestren tu impacto. Ejemplo: "Lideré un equipo de 5 personas, logrando un incremento del 25% en la productividad del proyecto." Puedes guiarte por lo explicado previamente en la sección de currículum, expandiendo más en cada experiencia.</p>
                        </div>
                        <div className='texto2'>
                            <h4>Habilidades y Validaciones</h4>
                            <p>Agrega habilidades relevantes para tu industria y asegúrate de que otros profesionales validen esas habilidades. Las validaciones refuerzan tu perfil y muestran que tu red profesional reconoce tu experiencia en esas áreas. LinkedIn permite destacar las tres habilidades más importantes, así que elige sabiamente.</p>
                        </div>
                        <div className='texto1'>
                            <h4>Estudios</h4>
                            <p>La sección de estudios en LinkedIn es una parte fundamental de tu perfil, ya que muestra tu formación académica y tus credenciales educativas. Aquí puedes incluir títulos universitarios, cursos, certificaciones y cualquier otra formación relevante que hayas completado.</p>
                        </div>
                        <div className='texto2'>
                            <h4>Recomendaciones</h4>
                            <p>Solicitar recomendaciones de colegas, superiores o clientes es una excelente manera de mostrar tus capacidades desde una perspectiva externa. Estas opiniones pueden tener mucho peso al momento de ser evaluado por reclutadores o potenciales empleadores.</p>
                        </div>
                    </div>
                </div>
                <div className='part'>
                    <h3>Consejos importantes</h3>
                    <ul className='list'>
                        <li><strong>Importancia del Perfil Completo:</strong> Los usuarios con perfiles completos al 100% tienen hasta 40 veces más probabilidades de recibir ofertas laborales a través de LinkedIn.</li>
                        <li><strong>Optimización del Resumen:</strong> Los resumenes se indexan en el motor de búsqueda de LinkedIn. Asegúrate de incluir palabras clave relevantes relacionadas con tu actividad y habilidades.</li>
                        <li><strong>Honestidad en el Perfil:</strong> Sé honesto sobre tus verdaderas aptitudes. No incluyas en tu perfil experiencias comprometedoras o falsas, ya que en plataformas como LinkedIn, donde la transparencia es clave, este tipo de detalles no pasarán desapercibidos por mucho tiempo.</li>
                        <li><strong>Inspiración y Recomendaciones</strong> Consulta los perfiles de otros miembros de LinkedIn; su presentación puede inspirarte a crear la tuya. No dudes en pedir recomendaciones a tus clientes, socios y proveedores, no solo a tus compañeros o a las personas con las que trabajas a diario. Estas recomendaciones diversifican tu red de contactos y enriquecen tu perfil, aumentando tu credibilidad ante posibles empleadores y colaboradores.</li>
                        <li><strong>Vincula tu Experiencia Profesional:</strong> Asocia tu experiencia con la empresa correspondiente si esta cuenta con una página de LinkedIn. De esta manera, el logotipo de la empresa se añadirá a tu perfil, lo que no solo lo hará más profesional, sino que también aumentará la credibilidad de tu trayectoria laboral.</li>
                        <li><strong>Perfil Multilingüe:</strong> Incorpora palabras clave que se correspondan con tus aptitudes. Esto facilitará que los contactos que buscan habilidades específicas te identifiquen más fácilmente, aumentando tus posibilidades de ser encontrado por reclutadores y profesionales en tu área.</li>
                        <li><strong>Personaliza el Orden del Perfil:</strong> Modifica el orden en que aparecen los elementos de tu perfil moviendo las secciones de tu página. De esta manera, podrás dar prioridad a la información que consideres más relevante, asegurando que los visitantes se centren en los aspectos más importantes de tu trayectoria profesional.</li>
                        <li><strong>Enriquece tu Perfil con Multimedia:</strong> Refuerza tu perfil con contenido multimedia para ilustrar tu experiencia y promocionar tu empresa. Publica vídeos, fotos, presentaciones de SlideShare, estudios de caso, y otros recursos visuales que muestren tus logros y proyectos. Este tipo de contenido no solo hace tu perfil más atractivo, sino que también permite a los visitantes comprender mejor tu trayectoria y habilidades.</li>
                        <li><strong>Incluye Proyectos Relevantes:</strong> Añade proyectos específicos, tanto profesionales como personales, que demuestren tus habilidades y compromiso. Esto incluye actividades complementarias, como la afiliación a asociaciones o la participación en eventos esporádicos (benéficos, humanitarios, etc.). Estos proyectos no solo enriquecen tu perfil, sino que también reflejan tu pasión y dedicación hacia tu área de expertise y la comunidad.</li>
                    </ul>
                </div>
                <hr className='separation'/>
                <div className='part'>
                    <h3>Networking en LinkedIn</h3>
                    <p>
                    El networking es el proceso de construir y mantener relaciones profesionales con otras personas en tu industria o campo de interés. Estas conexiones amplian tu aparición en busquedas y pueden ser valiosas para compartir información, recursos, oportunidades laborales y consejos.
                    </p>
                    <ul className='list'>
                        <li><strong>Oportunidades Laborales:</strong> Muchas posiciones no se publican, y el networking puede ayudarte a enterarte de ellas a través de tus contactos.</li>
                        <li><strong>Aprendizaje y Desarrollo Profesional:</strong> Interactuar con otros profesionales puede ofrecerte nuevas perspectivas, habilidades y conocimientos.</li>
                        <li><strong>Aumento de la Visibilidad:</strong> Conectar con personas en tu industria puede ayudarte a construir una reputación y aumentar tu visibilidad profesional.</li>
                        <li><strong>Acceso a Recursos:</strong> Puedes obtener recomendaciones, consejos y apoyo de otros profesionales que han enfrentado desafíos similares.
                        </li>
                    </ul>
                </div>
                <div className='part'>
                    <h3>Consejos para hacer networking</h3>
                    <ul className='list'>
                        <li>Define qué esperas lograr a través del networking: buscar un nuevo empleo, mejorar habilidades, obtener mentores, etc.</li>
                        <li>Asegúrate de que tu perfil en LinkedIn y otras plataformas esté actualizado y refleje tus habilidades y logros.
                        </li>
                        <li>Participa en conferencias, ferias comerciales, seminarios y eventos de la industria donde puedas conocer a otros profesionales.
                        </li>
                        <li>LinkedIn es una herramienta poderosa para conectar con profesionales. Comparte contenido relevante y participa en discusiones.
                        </li>
                        <li>Sigue grupos y comunidades en redes sociales relacionadas con tu campo.
                        </li>
                        <li>No se trata solo de acumular contactos. Busca construir relaciones auténticas. Interactúa regularmente y muestra interés genuino por los demás.
                        </li>
                        <li>No dudes en pedir recomendaciones o referencias a tus contactos. A menudo, estarán dispuestos a ayudarte.
                        </li>
                        <li>Al comunicarte, evita mensajes genéricos. Personaliza tus interacciones para hacerlas más efectivas.
                        </li>
                        <li>No fuerces conexiones o trates de venderte a ti mismo sin construir una relación primero.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className='hr'/>
    </div>
  )
}

export default Linkedin