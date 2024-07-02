import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './Styles/main.sass'

const link =document.createElement('link');
link.rel = 'icon'
link.href = '/favicon.ico'
document.head.appendChild(link);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
