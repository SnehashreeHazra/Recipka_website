import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout.jsx'
import Home from "./View/Home/Home.jsx";
import ContactUs from './View/ContactUs/ContactUs.jsx';
import TermsConditions from './View/Terms&Conditions/TermsConditions.jsx';
import Loader from './View/Home/Loader.jsx';

const App = () => {
  const [loader,setloader]=useState(true)
  useEffect(()=>{
    const load = () =>{
      setTimeout(()=>{
        setloader(false)
      },4000)
    }
    load()
  },[])
  return (
    <>
    {loader ? <Loader/> : <>      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='' element={<Home />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/terms-conditions' element={<TermsConditions />} />
          </Route>
        </Routes>
      </BrowserRouter> </>}

    </>
  )
}

export default App
