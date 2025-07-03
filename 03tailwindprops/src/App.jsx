import { useState } from 'react'
import './App.css'
import Card from './Card'

// let myObj = {
//   title : 'My GIF'
// }

function App() {

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">✅ Tailwind is Working!</h1>
      </div>
      <Card title = 'GIF - 1' character = 'doremoan'/>
      <Card title = 'GIF - 2' character = 'nobita'/>

    </>
  )
}

export default App
