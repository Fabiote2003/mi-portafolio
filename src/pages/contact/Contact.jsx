import React from 'react';
import './Contact.css';
const Contact = () => {
  return (
    <div>
      <h1>¡ME PUEDES <span>CONTACTAR</span> POR AQUÍ!</h1>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/fabioogomez/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a target="_blank" href="https://wa.me/+54543794071109?text=Buenos%20d%C3%ADas%20Fabio,%20estoy%20interesado%20en%20tu%20perfil!%20"><i class="fa-brands fa-square-whatsapp"></i></a>
        <h2>ESCANEA EL CÓDIGO AQUÍ ABAJO Y CONTACTAME POR WhatsApp</h2>
        <img src='../../../src/assets/qrcode-1678767140772.png' width={200} height={200} />
      </div>
    </div>
  )
}

export default Contact