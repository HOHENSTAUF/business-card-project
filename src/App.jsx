import { useState } from 'react'
import './App.css'
//import profilePicture from './images/Albrecht_photo.png';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="Business_card">
      <img className='Portrait' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Lucas_Cranach_d.%C3%84._-_Bildnis_des_Markgrafen_Albrecht_von_Brandenburg-Ansbach_%28Herzog_Anton_Ulrich-Museum%29.jpg/800px-Lucas_Cranach_d.%C3%84._-_Bildnis_des_Markgrafen_Albrecht_von_Brandenburg-Ansbach_%28Herzog_Anton_Ulrich-Museum%29.jpg' className='Picture' alt="portrait of Albrecht" />
      <div className='Info'>
        <p>Albrecht</p>
        <p>Duke of Prussia</p>
        <p>kissmyprussianduke.pr</p>
      </div>
      <div className='Mail-me'>
        <p>eine Taube schicken</p>
      </div>
      <div className='Summary'>
        <h1>About</h1>
        <p>I am the 37th Grand Master of the Teutonic Knights, interested in rebelling against Holy Roman Empire and joining the League of Torgau. I like to rule prosperously in my land.</p>
        <h1>Interests</h1>
        <p>A huge fan of Lutheranism. Kingdom founder. Leader. Kind of reformer. Education enjoyer. Teutonian knight either.</p>
      </div>
      <div className='Social'>
        <p>all this icons here</p>
      </div>
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