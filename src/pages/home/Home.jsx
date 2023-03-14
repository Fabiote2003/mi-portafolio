import React from 'react'
import './Home.css'
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

const Home = () => {
  const [text] = useTypewriter({
    words: ['Frontend Developer'],
    loop: false,

  })

  return (
    <section className='home'>
      {/* <img className='imagen-fabio' src='../../../src/assets/foto-fabio.png' /> */}
      <img className='elipse-1' src='../../../src/assets/elipse-1.svg' />
      <img className='elipse-2' src='../../../src/assets/elipse-2.svg' />
      <div className='home-content'>
        <p className='home-saludo'>Buenos días, mi nombre es <span>Fabio Gomez</span></p>
        <h1>
          Soy {' '}
          <span>
            {text}
          </span>
          <Cursor />
        </h1>
        <p className='home-introduccion'>Soy un apasionado del desarrollo web y la programación. Me gusta aprender nuevas tecnologías y realizar proyectos que me permitan mejorar mis habilidades como programador.</p>
        <Link to={"about"} className='about-me-button'>MAS SOBRE MI</Link >
        <img className='imagen-fabio' src='../../../src/assets/foto-fabio.png' />
        <img className='background-decoration-image' src="../../../src/assets/rectangulo-background.svg" alt="" />
      </div>
    </section>
  )
}

export default Home