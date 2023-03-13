import React from 'react'
import '../styles/SobreNosotros.css'
import jeweler from '../assets/images/jeweler.jpg'

const SobreNosotros = () => {
  return (
    <div className='main'>
        <h1>SOBRE NOSOTROS</h1>
        <div className='second-container'>
            <div className='text'>
            Somos una empresa dedicada a nuestros clientes, con el fin de llegar a cumplir sus deseos, y que puedan compartir sus mejores momentos, dedicados desde 1910,  Shalom a pasado de generacion en generacion de la mano de joyeros experiemntados para cumplir sus necesidades.
            </div>
            <div className='img-container'>
                <img src={jeweler} alt="" />
            </div>
        </div>
    </div>
  )
}

export default SobreNosotros