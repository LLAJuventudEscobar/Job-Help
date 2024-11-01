import React from 'react'
import '../styles/entrevistas.css'
import workInProgress from '../assets/work-in-progress.webp'


const Entrevistas = () => {
  return (
    <div id='entrevistas'>
        <div id='entrevistasContainer'>
            <h2>Entrevistas</h2>
            <div id='entrevistasinText'>
                <img id='work-in-progress' src={workInProgress} alt="Trabajo en proceso"/>
            </div>
        </div>
    </div>
  )
}

export default Entrevistas