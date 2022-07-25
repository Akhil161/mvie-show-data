import React, { useState } from 'react'
import App from './App'
import Specific from './Specific';
import Buy from './Buy';
import './Ap.css'

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  

export default function Ap() {
    let [data,setdata]=useState();
    
  return (
    <div className='main1'>
  <BrowserRouter >
  <Routes>
    <Route path="/" element={<App data1={setdata}/>}>
      </Route>
      <Route path="/spec/:id" element={<Specific input={data}/>}>
      </Route>
      <Route path="/buy/:i" element={<Buy input1={data}/>}>
      </Route>
    
  </Routes>
</BrowserRouter>
</div>
  )
}
