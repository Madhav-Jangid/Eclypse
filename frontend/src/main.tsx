import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'
import { CartProvider } from './context/CartContext.tsx'

createRoot(document.getElementById('root')!).render(

  <CartProvider>
    <StrictMode>
      <Navbar />
      <App />
    </StrictMode>,
  </CartProvider>
)
