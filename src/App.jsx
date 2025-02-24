import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout.jsx'
import Home from "./View/Home/Home.jsx";
import ContactUs from './View/ContactUs/ContactUs.jsx';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/contact-us' element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
