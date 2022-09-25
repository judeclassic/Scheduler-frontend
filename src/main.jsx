import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UserProvider from './context/userContext'
import { CookiesProvider } from "react-cookie";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <CookiesProvider>
      <UserProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </UserProvider> 
    </CookiesProvider>
)
