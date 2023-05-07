
import './App.css';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css"; 
//flex
import '/node_modules/primeflex/primeflex.css'

//animate css
import "animate.css/animate.min.css";

import { Header } from './components/header/header';
import { Home } from './components/home-component/home';
import { LugarCeremonia } from './components/lugar-ceremonia/LugarCeremonia';
import { ConfirmarAsistencia } from './components/confirmar-asistencia/ConfirmarAsistencia';
import { Galeria } from './components/galeria/Galeria';

import cisne from './assets/imgs/cisne.jpg';
import bici from './assets/imgs/bici.jpeg';
import logo from './assets/imgs/logo-mio.png';
import mirador from './assets/imgs/mirador.jpg'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { MasInfo } from './components/mas-info/MasInfo';

function App() {
  return (
    <div className="App flex flex-column align-items-center gap-3">
      <img src={logo} className="w-3 mt-3" alt=""/>
      <Home />
      <img src={bici} className="w-9" alt=""/>
      <AnimationOnScroll className='w-12' animateIn='animate__slideInLeft' delay={200} animateOnce={true} animatePreScroll={false}>
        <LugarCeremonia />
      </AnimationOnScroll>
      <img src={cisne} className="w-9" alt=""/>
      <AnimationOnScroll className='w-12' animateIn='animate__slideInLeft' delay={200} animateOnce={true} animatePreScroll={false} >
        <ConfirmarAsistencia />
      </AnimationOnScroll>
      <img src={mirador} className="mt-4 w-9" alt=""/>
      <AnimationOnScroll className='w-12' animateIn='animate__slideInLeft' delay={200} animateOnce={true} animatePreScroll={false} >
        <MasInfo />
      </AnimationOnScroll>
      <Galeria />
    </div>
  );
}

export default App;
