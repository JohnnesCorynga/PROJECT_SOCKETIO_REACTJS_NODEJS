import { useState } from 'react'
import './App.css'
import io from 'socket.io-client'

const socket = io('http://localhost:4000') //Essa é a porta onde está o meu backend

function App() {

  return (
    <div className="App">
      <h1>Hello, World"</h1>
    </div>
  )
}

export default App
