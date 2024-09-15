import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar/Navbar';
import Form from './components/navbar/Form';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pass from './components/navbar/Pass'


import reportWebVitals from './reportWebVitals';
import Buttons from './components/navbar/Buttons';

// import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route path='/'
          element={
            <>
            <Navbar/>
            <Form/>
            </>
          }
        >
        </Route>

        <Route path='/About' element={
          <>
          <Navbar/>
          <About/>
          
          </>
        }
        ></Route>

        <Route path='/About' element={
          
          <>
          <Navbar/> 
          <Form/>
          
          </>
          }/>
       
      </Routes>
    </Router>


    {/* <Pass/>  */}
  </React.StrictMode>
);

reportWebVitals();
