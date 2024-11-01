import React from 'react'
import '../styles/inicio.css'
import logo from '../assets/logo.png'

const Inicio = () => {
  return (
    <div id='inicio'>
        <div  id='inicioContainer'>
            <img src={logo} alt="Juventud de La Libertad Avanza" className="inicioImg"/>
            <div className="inicioText">
                <h1>COMPRENDEMOS LOS DESAFÍOS DEL MERCADO LABORAL</h1>
                <p>
                    La Libertad Avanza se compromete a empoderar a jóvenes y adultos en su búsqueda de empleo, ofreciendo un instructivo accesible y práctico. Entendemos que conseguir un trabajo puede ser un desafío abrumador, especialmente en un mercado laboral competitivo.
                </p>
                <p>
                    Creemos firmemente que todos merecen las herramientas necesarias para destacar en su trayectoria profesional. Nuestro objetivo es facilitar el acceso a recursos que ayuden a crear perfiles laborales atractivos y currículums impactantes.
                </p>
                <p>
                    Sabemos que el éxito profesional comienza con la preparación adecuada, y estamos aquí para apoyar a nuestra comunidad en cada paso del camino. Juntos, podemos abrir puertas y construir un futuro mejor para todos.
                </p>
            </div>
        </div>
        <hr className='hr'/>
    </div>
  )
}

export default Inicio
