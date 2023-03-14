import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './MainLayout.css';

const MainLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setMostrarMenu(false)
  }, [navigate]);

  useEffect(() => {
    setMostrarAnimacion(true);
    setTimeout(() => {
      setMostrarAnimacion(false);
    }, 800);
  }, [navigate]);

  const [mostrarAnimacion, setMostrarAnimacion] = useState(false);
  const [mostrarMenu, setMostrarMenu] = useState(false);

  return (
    <body className='container'>
        <aside className={`${mostrarMenu ? 'menu-desplegado sidebar' : 'sidebar'}`}>
          <h1><span>F</span>ABIO<span>D</span>EV</h1>
          <nav>
            <NavLink to={"/"} className={({isActive}) => isActive ? 'nav-item-active' : 'nav-item'}><i class="fa-solid fa-house"></i>Inicio</NavLink>
            <NavLink to={"about"} className={({isActive}) => isActive ? 'nav-item-active' : 'nav-item'}><i class="fa-solid fa-user"></i>Sobre mi</NavLink>
            <NavLink to={"services"} className={({isActive}) => isActive ? 'nav-item-active' : 'nav-item'}><i class="fa-solid fa-list"></i>Servicios</NavLink>
            <NavLink to={"portafolio"} className={({isActive}) => isActive ? 'nav-item-active' : 'nav-item'}><i class="fa-solid fa-briefcase"></i>Portafolio</NavLink>
            <NavLink to={"contacto"} className={({isActive}) => isActive ? 'nav-item-active' : 'nav-item'}><i class="fa-solid fa-comments"></i>Contacto</NavLink>
          </nav>
          <h1 className='logo-secondary'><span>F</span>ABIO<span>D</span>EV</h1>
        </aside>
        
        

        <main className='main-container' onClick={() => mostrarMenu ? setMostrarMenu(false) : ''}>
            <header>
              <h1><span>F</span>ABIO<span>D</span>EV</h1>
              <i class="fa-solid fa-bars" onClick={() => setMostrarMenu(!mostrarMenu)}></i>
            </header>
            <div className={`${mostrarAnimacion ? 'fade-in-left' : ''}`}>
              <Outlet />  
            </div>
        </main>
    </body>
  )
}

export default MainLayout