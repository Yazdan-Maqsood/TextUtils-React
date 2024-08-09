import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [Theme, setTheme] = useState('light');
  const [themeName, setThemeName] = useState('Light Mode');
  const [alert, setAlert] = useState(null);

  const toggleTheme = () => {
    if(Theme === "light") {
      setTheme("dark");
      setThemeName("Dark Mode");
      document.body.style.backgroundColor = "#0C1B33";
      showAlert("success", "Dark Mode is enabled");
    }
    else {
      setTheme("light");
      setThemeName("Light Mode");
      document.body.style.backgroundColor = "#EEEEEE";
      showAlert("success", "Light Mode is enabled");
    }
  }

  const showAlert = (type, message) => {
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
    <Router>
        <Navbar title="TextUtils" about="About Us" Theme={Theme} toggleTheme={toggleTheme} themeName={themeName} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze" Theme={Theme} showAlert={showAlert} />} />
            <Route path="/about" element={<About Theme = {Theme}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;