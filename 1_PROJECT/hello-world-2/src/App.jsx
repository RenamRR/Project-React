import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './components/Component'
import Templates from './components/Templates'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Component />
      <Templates />
    </>
  )
}

export default App
