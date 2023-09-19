import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './global.css'

import { PI as numeroPi, GTM_BRASIL } from './teste'
import nomes from './nomes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* {numeroPi}
    <br />
    {nomes.length} */}
    <App />
  </React.StrictMode>,
)
