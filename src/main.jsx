import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"


import Landing from './pages/Landing'
import Browse from './pages/Browse'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Landing/>
    
  },
  {  
    path: "/browse",
    element: <Browse/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
