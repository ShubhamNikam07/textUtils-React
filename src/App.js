import logo from './logo.svg';
import About from './component/About';
import Navbar from './Navbar';
import TextArea from './component/TextArea';
import './App.css';
import Alert from './component/Alert';
import React from 'react';
function App() {

    return(
    <div className="App">
      <Navbar title="TextUtils" About="About" mode="light" />
      <TextArea mode="light" />
    </div> 
  );
}


export default App;
