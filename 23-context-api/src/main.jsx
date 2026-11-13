import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Themcontext from './context/Themcontext.jsx';

createRoot(document.getElementById('root')).render(
 <Themcontext>
    <App />
  </Themcontext>
)
