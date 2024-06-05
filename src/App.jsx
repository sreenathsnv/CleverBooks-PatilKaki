import { useState } from 'react'

import Navbar  from './components/Navbar'
import Header from './components/Header'
import Solved from './components/Solved'
import Metric from './components/Metric'
import MarqueeElement from './components/MarqueeElement'
import Story from './components/Story'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar/>
      <Header/>
      <Solved/>
      <Metric/>
      <MarqueeElement/>
      <Story/>
    </>
  )
}

export default App
