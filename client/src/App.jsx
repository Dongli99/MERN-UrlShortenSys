import React, { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { LogIn } from './pages/Login/Login'
import { SignUp } from './pages/SignUp/SignUp'
import { MyURL } from './pages/MyURL/MyURL'
import { About } from './pages/About/About'
import { Layout } from './layout/Layout'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/login' element={<LogIn/>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/myurl' element={<MyURL />} />
        <Route path='/about' element={<About />} />
      </Route>
    )
  );

  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App
