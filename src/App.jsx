import { BrowserRouter, Routes, Route } from "react-router-dom"

//Pages
import MainLayout from "./layout/MainLayout"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Home from "./pages/home/Home"
import Portafolio from "./pages/portafolio/Portafolio"
import Services from "./pages/services/Services"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />}/>
          <Route path="portafolio" element={<Portafolio />}/>
          <Route path="contacto" element={<Contact />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
