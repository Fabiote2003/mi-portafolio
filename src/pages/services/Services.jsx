import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className='services-section'>
      <h1>Los <span>servicios</span> que puedo ofrecer son:</h1>
      <div className='services-list'>

        <div className='service-item'>
          <h2>Desarrollo de Landing Pages con <span>HTML</span> y <span>CSS</span></h2>
          <div className="service-images">
            <img src='../../../src/assets/html-image.png'/>
            <img src='../../../src/assets/css-logo.png'/>
          </div>
        </div>

        <div className='service-item'>
          <h2>Desarrollo de Frontend con <span>ReactJS</span> y <span>TailwindCSS</span></h2>
          <div className="service-images">
            <img src='../../../src/assets/react-logo.png'/>
            <img src='../../../src/assets/TAILWIND-LOGO.png'/>
          </div>
        </div>

        <div className='service-item'>
          <h2>DESARROLLO DE APLICACIONES <span>FULLSTACK</span> con stack <span>MERN</span></h2>
          <div className="service-images">
            <img src='../../../src/assets/mern-logo 1.png'/>
          </div>
        </div>


        <div className='service-item'>
          <h2>DISEÑO DE SITIOS WEB EN <span>FIGMA</span> BÁSICO</h2>
          <div className="service-images">
            <img src='../../../src/assetS/figma-logo.png'/>
           
          </div>
        </div>

        <div className='service-item'>
          <h2>Programación frontend con <span>responsive design</span></h2>
          <div className="service-images">
            <img src='../../../src/assets/responsive-design-image.png'/>
          </div>
        </div>
      </div>

      <div className="services-tecnologias">
        <h1 className='service-tecnologias-title'>TECNOLOGÍAS <i class="fa-solid fa-gear"></i></h1>
        <div className='services-tecnologias-list'>
            <img src='../../../src/assets/html-image.png'/>
            <img src='../../../src/assets/css-logo.png'/>
            <img src='../../../src/assets/js 1.png'/>
            <img src='../../../src/assets/react-logo.png'/>
            <img src='../../../src/assets/TAILWIND-LOGO.png'/>
            <img src='../../../src/assets/redux-logo 1.png'/>
            <img src='../../../src/assets/mongodb-logo 1.png'/>
            <img src='../../../src/assets/express-logo 1.png'/>
            <img src='../../../src/assets/node-logo 1.png'/>
            <img src='../../../src/assets/git-logo 1.png'/>
            <img src='../../../src/assets/figma-logo.png'/>
            <img src='../../../src/assets/nextjs-logo 1.png'/>
        </div>
      </div>

    </section>
  )
}

export default Services