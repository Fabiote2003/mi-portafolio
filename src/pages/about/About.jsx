import React from 'react'
import curriculum from '../../../src/assets/FabioGomez-CV - copia.pdf'
import './About.css'
const About = () => {
  return (
    <section className='about-section'>
      <h1 className='about-title'>¡<span>CONOCE</span> UN POCO SOBRE <span>MI</span>!</h1>
      <p className='about-introduccion-texto'>Tengo 19 años de edad. Soy estudiante de Licenciatura en Sistemas de Información, estoy en el 3er año de la carrera. Además, realicé cursos de desarrollo web, especializándome en el desarrollo Frontend.</p>

      <div className='about-info'>
        <p><span>Fecha de nacimiento:</span> 25 de abril de 2003.</p>
        <p><span>Edad:</span> 19 años.</p> 
        <p><span>Ciudad:</span> Corrientes, Argentina <img src='../../assets/argentina 1.png' /> .</p>
        <p><span>Telefono:</span> +54 9 379 407-1109</p>
        <p><span>Carrera:</span> Licenciatura en Sistemas de Información | UNNE (Universidad Nacional del nordeste) .</p>
        
        <a href={curriculum} download="Curriculum Vitae - Fabio Gomez">Descargar CV</a>
      </div>
      
      <div className="about-education">
        <h1 className='about-education-title'>EDUCACIÓN <img src='../../../src/assets/mortarboard.png' /></h1>
        <div className='education-content'>
            <div className="education-item">
              <div className='circle-dot'></div>
              <div className='education-date'>
                <i class="fa-solid fa-calendar-days"></i> 
                <p>2020 - ACTUALIDAD</p>
              </div>
              <h1 className='education-title'>Cursos Online | Udemy - Platzi – Coursera.</h1>
              <p>En estas plataformas he adquirido conocimientos en tecnologías orientadas al desarrollo web, tanto backend como frontend. También he aprendido sobre habilidades blandas en Platzi, por ejemplo como trabajar en equipo.</p>
            </div>
            <div className="education-item">
              <div className='circle-dot'></div>
              <div className='education-date'>
                <i class="fa-solid fa-calendar-days"></i> 
                <p>2021 - ACTUALIDAD</p>
              </div>
              <h1 className='education-title'>Licenciatura en sistemas de información | Universidad Nacional del Nordeste.</h1>
              <p>En la universidad he adquirido conocimientos en algoritmos, estructuras de datos, resolución de problemas y paradigmas de programación como funcional, orientado a objetos, etc. También tuve materias relacionadas a la Ingeniería de Software y a los Sistemas Operativos.</p>
            </div>

            <div className='education-logos'>
              <img src='../../../src/assets/platzi-logo.png'/>
              <img src='../../../src/assets/unne-logo.png'/>
              <img src='../../../src/assets/udemy-logo.png'/>
              <img src='../../../src/assets/coursera-logo.png'/>
            </div>
        </div>

      </div>
    </section>
  )
}

export default About