import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light'); //Whether dark mode is enable or not, whenever app runs for the first time it will run in dark

  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
        setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark Mode has been Enabled", "success"); 
    }
    
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'; 
      showAlert("Light Mode has been Enabled", "success");
    }      
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title = "TextUtils" aboutText='About Us' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-3" >
          <Routes>
              <Route exact path="/" element={<TextForm showAlert={showAlert} heading="TextUtils - Word Counter | Character Counter | Remove Extra Spaces" mode={mode}/>}/>
              <Route exact path="/about" element={<About mode={mode}/>}/> 
              {/* <Route exact path="/contact" element={<ContactUs contactTitle="Contact Us"/>}/>     */}
          </Routes>
        </div>  
      </BrowserRouter> 
    </>
  );
}

export default App;
