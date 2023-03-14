import React from 'react'
import './Modal.css'
const Modal = ({children, estado, setEstado}) => {
  return (
    <>
        {estado &&  (
             <div className='overlay slide-in-fwd-center'>
                <div className='contenedor-modal slide-in-bottom'>
                    {children}
        
                    <div className='boton-cerrar' onClick={() => setEstado(false)}>
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>
            </div>
        )
       }
    </>
    
  )
}

export default Modal