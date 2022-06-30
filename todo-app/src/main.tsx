import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from "./components/styles/GlobalStyle.styled"
import App from './App'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter> 
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </ BrowserRouter> 
)
