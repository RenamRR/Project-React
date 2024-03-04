import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './components/Component'
import Templates from './components/Templates'
import MyComponent from './components/MyComponent'
import MyButton from './components/MyButton'
import Soma from './components/Soma'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Component />
      <Templates />
      <MyComponent />
      <MyButton />
      <Soma />
    </>
  )
}

export default App
