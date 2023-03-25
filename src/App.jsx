import { useState } from 'react'
import './styles/globalStyle.css'
import './styles/reset.css'
import './styles/Header.css'
import './styles/homePage.css'
import { HomePage } from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HomePage />
    </div>
  )
}

export default App
