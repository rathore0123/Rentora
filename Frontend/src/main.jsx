import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import Signin from './components/Signin.jsx'
import { createRoot } from 'react-dom/client'
import HomePage from './components/HomePage.jsx'
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import Signup from './components/Signup.jsx'
import Filter from './components/filter.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<HomePage />}/>
      <Route path='signin' element={<Signin />}/>
      <Route path='signup' element={<Signup />}/>
      <Route path='login-home' element={<Filter/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
