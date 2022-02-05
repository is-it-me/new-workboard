import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';
import './index.css'

import App from './App'
import LandingPage from './containers/LandingPage'
import Login from './containers/Login'
import SignUp from './containers/SignUp'
import ResetPass from './containers/ResetPass'
import Header from './components/Header'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/forgot' element={<ResetPass />} />
      <Route path='/header' element={<Header />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
