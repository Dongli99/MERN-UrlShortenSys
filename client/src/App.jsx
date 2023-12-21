import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Outlet,
  RouterProvider,
} from 'react-router-dom'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
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
      <div>
        <Navbar />
          <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default App
