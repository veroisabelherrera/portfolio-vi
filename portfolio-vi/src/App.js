import React from 'react'
import logo from './logo.svg'
import './App.css'
import { TextIntro } from './components/molecules/TextIntro';
import { AboutDev } from './components/molecules/AboutDev';
import { SkillsDev } from './components/molecules/SkillsDev';
import { ProjectsDev } from './components/molecules/ProjectsDev';
import { Contact } from './components/molecules/Contact';



function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="TextIntro-wrapper">
        <TextIntro />
        <AboutDev />
        <SkillsDev />
        <ProjectsDev />
        <Contact />
      </div>
    </div>
  );
}

export default App;
