import React from 'react'
import ReactDOM from 'react-dom/client'
import './GayaKiraWang.css'
import KiraWang from './KiraWang.jsx'
import Footer from './Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <KiraWang />
    <Footer />
  </React.StrictMode>,
)
