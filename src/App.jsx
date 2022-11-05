import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="Business_card">
      <div className="photo"></div>
      <div className="main">
        <div className="name">Albert</div>
        <div className="profession">Duke of Prussia</div>
        <button className="email"></button>
      </div>
      <div className="footer">email</div>
    </div>
  )
}

export default App
