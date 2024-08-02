import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Root from './components/Root'
import Home from './Pages/Home'
import AboutMe from './Pages/AboutMe'
import Navigation from "./components/Navigation"
import Skills from "./Pages/Skills"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './Pages/Contact'

function App() {

  const router = createBrowserRouter([
    {path: "/react-portfolio", element: <Root/>, children:[
      {path: "/react-portfolio", element: <Home/>},
      {path: "/react-portfolio", element: <Skills/>},
      {path: "/react-portfolio", element: <AboutMe/>},
      {path: "/react-portfolio", element: <Contact/>}


    ]}
  ])

  return (
    <RouterProvider router = {router}/>
  )
}

export default App
