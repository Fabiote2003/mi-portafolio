import React from 'react'
import './Portafolio.css'
import Modal from '../../components/Modal'
import { useState } from 'react'

const Portafolio = () => {
  const [estadoModal1, setEstadoModal1] = useState(false);
  const [estadoModal2, setEstadoModal2] = useState(false);
  const [estadoModal3, setEstadoModal3] = useState(false);
  const [estadoModal4, setEstadoModal4] = useState(false);
  const [estadoModal5, setEstadoModal5] = useState(false);
  const [estadoModal6, setEstadoModal6] = useState(false);
  const [estadoModal7, setEstadoModal7] = useState(false);
  const [estadoModal8, setEstadoModal8] = useState(false);
  const [estadoModal9, setEstadoModal9] = useState(false);
  const [estadoModal10, setEstadoModal10] = useState(false);
  const [estadoModal11, setEstadoModal11] = useState(false);



  return (
    <section className='portafolio-section'>
      
      <h1 className='portfolio-section__title'>Algunos de los <span>proyectos</span> que realicé</h1>
      <div className="projects-container">
        <h1 className='projects-title'>Lading Pages</h1>
        <div className="projects-list">
          <div className="project-item">
            <img src="../../../src/assets/medcare-logo.png" alt="Medcare Logo"/>
            <div className="item-overlay">
              <button onClick={() => setEstadoModal1(true)}>VER INFORMACIÓN</button>            
            </div>
          </div>
          <div className="project-item">
            <img src="../../../src/assets/sunnyside-logo.png" alt="Sunnyside logo"/>
            <div className="item-overlay">
            <button onClick={() => setEstadoModal2(true)}>VER INFORMACIÓN</button>
            </div>
          </div>
          <div className="project-item">
            <img src="../../../src/assets/bookmark-logo.png" alt="bookmark logo"/>
            <div className="item-overlay">
              <button onClick={() => setEstadoModal3(true)}>VER INFORMACIÓN</button>
            </div>
           
          </div>
        </div>
      </div>
      <div className="projects-container">
        <h1 className='projects-title'>Frontend con ReactJS</h1>
        <div className="projects-list">
          <div className="project-item">
            <img src="../../../src/assets/mariapp-logo.png" alt="Mariapp Logo"/>
            <div className="item-overlay">
            <button onClick={() => setEstadoModal4(true)}>VER INFORMACIÓN</button>
            </div>
          </div>
          <div className="project-item">
            <img src="../../../src/assets/budgete-planner-logo.png" alt="Budget Logo"/>
            <div className="item-overlay">
            <button onClick={() => setEstadoModal5(true)}>VER INFORMACIÓN</button>
            </div>
          </div>
          <div className="project-item">
            <img src="../../../src/assets/logo-cotizadormonedas.png" alt="Cotizador Image"/>
            <img src="../../../src/assets/cortizador-image.png" alt="Cotizador Image"/>
            <div className="item-overlay">
              <button onClick={() => setEstadoModal6(true)}>VER INFORMACIÓN</button>
            </div>
          </div>
          <div className="project-item">
            <img src="../../../src/assets/veterinaria-logo.png" alt="Cotizador Image"/>
            <img src="../../../src/assets/huella-logo.png" alt="Cotizador Image"/>
            <div className="item-overlay">
              <button onClick={() => setEstadoModal7(true)}>VER INFORMACIÓN</button>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-container">
        <h1 className='projects-title'>Proyectos Mern</h1>
        <div className="projects-list">
          <div className="project-item">
            <img src="../../../src/assets/todoApp-logo.png" alt="Todo App Logo"/>
            <img src="../../../src/assets/comprobado-icon.png" alt="Check Image"/>
            <div className="item-overlay">
              <button onClick={() => setEstadoModal8(true)}>VER INFORMACIÓN</button>
            </div>
          </div>
          <div className="project-item">
            <img src="../../../src/assets/tuTarea-logo.png" alt="Tu Tarea Logo"/>
            <img src="../../../src/assets/libros-image.png" alt="Tu Tarea Image"/>
            <div className="item-overlay">
              <button onClick={() => setEstadoModal9(true)}>VER INFORMACIÓN</button>
            </div>
          </div>
          <div className="project-item">
            <img src="../../../src/assets/veterinaria-logo.png" alt="Cotizador Image"/>
            <img src="../../../src/assets/huella-logo.png" alt="Cotizador Image"/>
            <div className="item-overlay">
              <button onClick={() => setEstadoModal10(true)}>VER INFORMACIÓN</button>
            </div>
          </div>
          <div className="project-item">
            <img src="../../../src/assets/uptask-logo.png" alt="Cotizador Image"/>
            <img src="../../../src/assets/organizar-image.png" alt="Cotizador Image"/>
            <div className="item-overlay">
               <button onClick={() => setEstadoModal11(true)}>VER INFORMACIÓN</button>
            </div>
          </div>
        </div>
      </div>
      <Modal 
        estado={estadoModal1}
        setEstado={setEstadoModal1}
        >
            <h1 className='title-project'>Medcare</h1>
            <p className='description-project'>En este proyecto he puesto a prueba mis habilidades maquetando páginas web con HTML semántico, Responsive Design, utilizando Flexbox y Grid. Me he inspirado en un video de Youtube para lo que es el diseño de la landing page.</p>
            <h2 className='tecnologias-project'><span>Tecnologías utilizadas:</span> HTML y CSS.</h2>
            <a href="https://hospitalfabio.netlify.app/" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
      </Modal>
      <Modal 
        estado={estadoModal2}
        setEstado={setEstadoModal2}
        >
            <h1 className='title-project'>Sunnyside</h1>
            <p className='description-project'>En este proyecto he puesto a prueba mis habilidades maquetando páginas webcon HTML semántico, Responsive Design, utilizando Flexbox y Grid. He utilizado una plataforma llamada Frontend Mentor para la idea del proyecto junto con el diseño.</p>
            <h2 className='tecnologias-project'><span>Tecnologías utilizadas:</span> HTML y CSS.</h2>
            <a href="https://sunnyprojectfabio.netlify.app/" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
      </Modal>
      <Modal 
        estado={estadoModal3}
        setEstado={setEstadoModal3}
        >
            <h1 className='title-project'>BookMark</h1>
            <p className='description-project'>En este proyecto he puesto a prueba mis habilidades maquetando páginas webcon HTML semántico, Responsive Design, utilizando Flexbox y Grid. He utilizado una plataforma llamada Frontend Mentor para la idea del proyecto junto con el diseño.</p>
            <h2 className='tecnologias-project'><span>Tecnologías utilizadas:</span> HTML y CSS.</h2>
            <a href="https://bookmarkfabio.netlify.app/" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
      </Modal>
      <Modal 
        estado={estadoModal4}
        setEstado={setEstadoModal4}
        >
            <h1 className='title-project'>mariapp</h1>
            <p className='description-project'>La idea de el proyecto era poder tener una lista de tareas por hacer y tener una barra de progreso que vaya rellenandose a medidada que se completan las tareas. En este proyecto he utilizado un Framework de JavaScript llamado ReactJS, el cual he utilizado para el manejo del estado con los hooks y para dividir el sitio web en componentes.</p>
            <h2 className='tecnologias-project'><span>Tecnologías utilizadas:</span> ReactJS, HTML y CSS.</h2>
            <a href="https://mariapp.netlify.app/" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
      </Modal>
      <Modal 
        estado={estadoModal5}
        setEstado={setEstadoModal5}
        >
            <h1 className='title-project'>Budget planner</h1>
            <p className='description-project'>Aplicación web para administrar tus gastos personales según un presupuesto y filtrarlos según categorías. Para el frontend he utilizado ReactJS y sos hooks como useState y useEffect.</p>
            <h2 className='tecnologias-project'><span>Tecnologías utilizadas:</span> React, HTML y CSS.</h2>
            <a href="https://fabio-budgetplanner.netlify.app/" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
      </Modal>
      <Modal 
        estado={estadoModal6}
        setEstado={setEstadoModal6}
        >
            <h1 className='title-project'>Cotizador de Criptomenedas</h1>
            <p className='description-project'>En esta aplicación web el obtivo es que puedas ingresar una divisa de algún país y una criptomoneda. Luego, cuando presiones en cotizar que te muestre en pantalla la cotización. Para la información de las criptomonedas he consumido una API.</p>
            <h2 className='tecnologias-project'><span>Tecnologías utilizadas:</span> ReactJS, Styled Components, Custom Hooks, HTML y CSS.</h2>
            <a href="https://cotizador-react-fabio.netlify.app/" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
      </Modal>
      <Modal 
        estado={estadoModal7}
        setEstado={setEstadoModal7}
        >
            <h1 className='title-project'>Administrador de Veterinaria</h1>
            <p className='description-project'>El objetivo de esta aplicación es que un veterinario o asistente del mismo pueda agendar los pacientes que tiene y programar una cita con ellos, registrando datos como sintomas, nombre de la mascota, fecha de la cita, etc.</p>
            <h2 className='tecnologias-project'><span>Tecnologías utilizadas:</span> ReactJS, HTML y CSS.</h2>
            <a href="https://citas-react-fabio.netlify.app/" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
      </Modal>
      <Modal 
        estado={estadoModal8}
        setEstado={setEstadoModal8}
        >
            <h1 className='title-project'>TODO APP</h1>
            <p className='description-project'>La idea es que en este proyecto puedas listar tareas por hacer y completarlas. Para la persistencia de datos he tenido que crear una API REST utilizando tecnologías para desarrollo backend.</p>
            <h2 className='tecnologias-project'><span>Tecnologías utilizadas:</span> ReactJS, Express.js, Node.js, MongoDB, JWT, HTML y CSS.</h2>
            <a href="https://youtu.be/sCYUBd-walI" target="_blank" rel="noopener noreferrer">Ver video de presentación</a>
            <a href="https://github.com/Fabiote2003/backend-todoApp" target="_blank" rel="noopener noreferrer">Código fuente Backend</a>
            <a href="https://github.com/Fabiote2003/frontend-todoApp" target="_blank" rel="noopener noreferrer">Código fuente Frontend</a>
      </Modal>
      <Modal 
        estado={estadoModal9}
        setEstado={setEstadoModal9}
        >
            <h1 className='title-project'>TuTarea</h1>
            <p className='description-project'>Este proyecto es para Bootcamp Devlights y me encuentro actualmente programandolo, la fecha de entrega es el 31-03-2023. He realizado el diseño en Figma. La idea es que cualquier estudiante pueda organizar sus tareas y trabajos practicos, dividiendo la tarea principal en subtareas e ir completandolas paso a paso. Permite agregar a otros integrantes para la realización de la tarea o trabajo práctico.</p>
            <h2 className='tecnologias-project'><span>Tecnologías en utilización:</span> ReactJS, Express.js, React-Router, Axios, Node.js, MongoDB, JWT, HTML y CSS.</h2>
            <p className='description-project' style={{marginTop: 20, fontWeight: 700, textAlign: 'center'}}>NO HAY LINKS, POR QUE TODAVÍA NO HE FINALIZADO EL PROYECTO.</p>
      </Modal>
      <Modal 
        estado={estadoModal10}
        setEstado={setEstadoModal10}
        >
            <h1 className='title-project'>VETERINARIA APP</h1>
            <p className='description-project'>El objetivo de esta aplicación es que un veterinario o asistente del mismo pueda: registrarse, iniciar sesión, agendar los pacientes que tiene y programar una cita con ellos, registrando datos como sintomas, nombre de la mascota, fecha de la cita, etc. La cualidad de este proyecto es la persistencia de datos utilizando una base de datos y con ella la creación de una API REST.</p>
            <h2 className='tecnologias-project'><span>Tecnologías utilizadas:</span> ReactJS, Express.js, Node.js, React-Router, MongoDB, JWT, HTML y CSS.</h2>
            <a href="https://www.youtube.com/watch?v=5778FQub27A&t=2s" target="_blank" rel="noopener noreferrer">Ver video de presentación</a>
            <a href="https://github.com/Fabiote2003/backend-veteria-app" target="_blank" rel="noopener noreferrer">Código fuente Backend</a>
            <a href="https://github.com/Fabiote2003/frontend-veterinaria" target="_blank" rel="noopener noreferrer">Código fuente Frontend</a>
      </Modal>
      <Modal 
        estado={estadoModal11}
        setEstado={setEstadoModal11}
        >
            <h1 className='title-project'>UpTask</h1>
            <p className='description-project'>La idea de este aplicación es que tu como usuario puedas registrarte, autenticarte y crear un proyecto. También, otra persona te puede agregar a su proyecto como colaborador del mismo. Cada Proyecto tiene tareas que se pueden completar, eliminar y editar.</p>
            <h2 className='tecnologias-project'><span>Tecnologías utilizadas:</span> ReactJS, Axios, Express.js, Node.js, React-Router, MongoDB, JWT, HTML y CSS.</h2>
            <a href="https://youtu.be/ipgss_8lFrU" target="_blank" rel="noopener noreferrer">Ver video de presentación</a>
            <a href="https://github.com/Fabiote2003/UpTask_MERN-BACKEND" target="_blank" rel="noopener noreferrer">Código fuente Backend</a>
            <a href="https://github.com/Fabiote2003/UpTask_MERN-frontend" target="_blank" rel="noopener noreferrer">Código fuente Frontend</a>
      </Modal>
    </section>
  )
}

export default Portafolio