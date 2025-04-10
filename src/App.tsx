import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function App() {
  

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Pizza Shop" />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}

export default App
