import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { appRoutes } from './routes/appRoute'
 import { createBrowserRouter,RouterProvider,createRoutesFromElements } from 'react-router-dom'
const router=createBrowserRouter(createRoutesFromElements(appRoutes))
import { appTheme } from './theme'
import { ThemeProvider } from '@mui/material'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={appTheme}>
       <RouterProvider router={router}/>
    </ThemeProvider>
   
  </StrictMode>,
)
