import React from 'react'
import "../styles/Suchaone.css"
import Cardb from "../images/cardi.jpg"

function Suchaone() {
    return (
        <div className='marco-uno'>
            <div className='imguno'>
                <img src={Cardb} alt="Foto Cardi" />
            </div>
            <div className='infouno'>
                <span>Mas caliente que asfalto en verano</span>
                <hr/>
                <span>Cardi B tu papi</span>
            </div>
        </div>
    )
}

export {Suchaone}