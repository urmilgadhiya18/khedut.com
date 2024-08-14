import './App.css'
import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Schemes from './components/Schemes';
import Sell from './components/sell';
import Buy from './components/Buy';
import Learn from './components/learn';
import Chat from './components/Chat';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [isAuth, setIsAuth]= useState({name: '', email: '', auth: false})

  return (
    <>
      <BrowserRouter>
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          {/* <Route path='/' element={<Home />}></Route> */}
          <Route path='/schemes' element={<Schemes />}></Route>
          <Route path='/learn' element={<Learn />}></Route>
          <Route path='/sell' element={<Sell />}></Route>
          <Route path='/buy' element={<Buy />}></Route>
          <Route path='/chat' element={<Chat />}></Route>
        
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
