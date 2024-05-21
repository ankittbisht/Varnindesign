import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './Views/Pages/Home/Homepage.jsx'
import Projectpage from './Views/Pages/Project/Projectpage.jsx'
import Contactpage from './Views/Pages/Contact/Contactpage.jsx'
import Aboutpage from './Views/Pages/About/Aboutpage.jsx'


const router = createBrowserRouter([
  {
    path: "/vernindesign",
    element: <App />,
    children: [
      {
        index:true,
        element: <Homepage/>,
      },
      {
        path: "projects",
        element: <Projectpage/>,
      },
      {
        path: "contact",
        element: <Contactpage/>,
      },
      {
        path: "about",
        element: <Aboutpage/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
