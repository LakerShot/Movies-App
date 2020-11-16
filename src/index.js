import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { MainContextWrapp } from './context/MainContext'

ReactDOM.render(
  <MainContextWrapp>
    <App />
  </MainContextWrapp>
, document.getElementById('root'))
