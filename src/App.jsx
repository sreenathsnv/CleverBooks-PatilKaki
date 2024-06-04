import { useState } from 'react'

import Navbar  from './components/Navbar'
import Header from './components/Header'
import Solved from './components/Solved'
import Metric from './components/Metric'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar/>
      <Header/>
      <Solved/>
      <Metric/>
    </>
  )
}

export default App
