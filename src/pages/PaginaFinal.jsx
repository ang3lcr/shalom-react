import React from 'react'
import '../styles/PaginaFinal.css'
import logo from '../assets/images/logo.png'

const PaginaFinal = () => {
  return (
    <div className='main2'>
        <p className='title'>SHALOM</p>
        <div className="img-container2">
            <img  src={logo} alt="" />
        </div>
        <ul className="list">
            <li>Preguntas Frecuentes</li>
            <li>Redes Sociales</li>
            <li>Envios</li>
        </ul>
    </div>
  )
}

export default PaginaFinal