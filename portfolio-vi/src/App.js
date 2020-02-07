import React from 'react'
import './App.css'
import { Intro } from './components/molecules/Intro';
import { AboutDev } from './components/molecules/AboutDev';
import { SkillsDev } from './components/molecules/SkillsDev';
import { ProjectsDev } from './components/molecules/ProjectsDev';
import { Contact } from './components/molecules/Contact';
import { Footer } from './components/molecules/Footer';
import { Switch, Route } from 'react-router-dom'
import { NextBtn } from './components/atoms/NavBtn';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from './components/molecules/Slider';



function App() {
  return (

    <div className="App">
      <img src={require('../src/assets/logo-vi_02.png')} className="App-logo" />
      <div className="root-wrapper">

        <SimpleSlider />

      </div>
      <footer>
        <Footer />
      </footer>

    </div>



    /*
    <div className="App">

      <img src={require('../src/assets/logo-vi_02.png')} className="App-logo" />
      <div className="root-wrapper">
        <Switch>

          <Route exact path="/" component={Intro}></Route>
          <Route exact path="/sobremi" component={AboutDev}></Route>
          <Route exact path="/herramientas" component={SkillsDev}></Route>
          <Route exact path="/proyectos" component={ProjectsDev}></Route>
          <Route exact path="/contacto" component={Contact} ></Route>

        </Switch>
      </div>

      <NextBtn />
      <Footer />

    </div>
*/


    /*
    <div className="App">

      <img src={require('../src/assets/logo-vi_02.png')} className="App-logo" />
      <div className="root-wrapper">
        
          <TextIntro />
        
      </div>
      <div>
      <a href="https://www.linkedin.com/in/veroisabelherrera/"><img src={require('./assets/next.svg')} className="next-icon" /></a>
      <a href="https://www.linkedin.com/in/veroisabelherrera/"><img src={require('./assets/previus.svg')} className="next-icon" /></a>
      </div>
    </div>
    */

  );
}

export default App;
