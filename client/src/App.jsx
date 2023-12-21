import React, { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Outlet,
  RouterProvider,
} from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { LogIn } from './pages/Login/Login'
import { SignUp } from './pages/SignUp/SignUp'
import { MyURL } from './pages/MyURL/MyURL'
import { About } from './pages/About/About'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
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

const Root = () => {
  return (
    <>
      <div className='font-mono text-primary'>
        <Navbar />
          <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default App
