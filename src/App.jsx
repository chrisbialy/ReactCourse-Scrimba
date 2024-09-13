import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Main />
    </>
  )
}

export default App