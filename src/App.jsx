import { useState } from 'react'
import './App.css'
import profilePicture from './images/Albrecht_photo.png';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="Business_card">
      <img src={profilePicture} className='Picture' alt="portrait of Albrecht" />
      <div className='Info'></div>
      <div className='Contact-button'></div>
      <div className='Summary'></div>
      <div className='Social'></div>
    </div>
  )
}

export default App


/* <div className="photo"></div>
      <div className="main">
        <div className="name">Albert</div>
        <div className="profession">Duke of Prussia</div>
        <button className="email"></button>
      </div>
      <div className="footer">email</div> */