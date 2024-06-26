import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffe from './Components/UpdateCoffe.jsx';
import UpdateNewCoffee from './Components/UpdateNewCoffee.jsx';
import SignUp from './Components/signup/SignUp.jsx';
import LogIn from './Components/login/LogIn.jsx';
import AuthProvider from './authProvider/AuthProvider.jsx';
import User from './Components/user/User.jsx';
import Layout from './layout/Layout.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: '/addCoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: '/updateCoffee/:id',
    element: <UpdateCoffe></UpdateCoffe>

  },
  {
    path: '/updateNewCoffee/:id',
    element: <UpdateNewCoffee></UpdateNewCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>

  },
  {
    path: '/login',
    element: <LogIn></LogIn>
  },
  {
    path:'/users',
    element:<User></User>,
    loader:()=>fetch('http://localhost:5000/user')

  }



]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
