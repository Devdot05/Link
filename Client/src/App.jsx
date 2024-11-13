import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Connections from './Components/Connections'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Connections/>
    </>
  )
}

export default App
