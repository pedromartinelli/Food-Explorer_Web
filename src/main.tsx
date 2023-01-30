import React from 'react'
import ReactDOM from 'react-dom/client'
import { SignIn } from './pages/SignIn'
import { Routes } from './routes'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
)
