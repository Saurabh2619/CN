import { useState } from 'react';

import './App.css';

import Navbar from './compounds/Navbar';
import Slider from './compounds/Slider';
import Footer from './compounds/Footer';



function App() {

  const[mode, setMode] = useState('light');

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
   <>
   <Navbar mode={mode} toggleMode={toggleMode}/>
   <Slider/>
   <Footer/>
      </>
  );
}

export default App;
