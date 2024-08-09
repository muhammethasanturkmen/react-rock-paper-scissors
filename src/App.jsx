import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
    <div className="header">
      <div className="header-text">
        <img src="/img/ROCKPAPERSCISSORS..svg" alt="Rock Paper Scissors" />
      </div>
      <div className="header-puan">
        <img src="/img/score.png" alt="Score" />
      </div>
    </div>
    <div className="content">
      <div className="content-start">
        <button>
          <img src="/img/kagit.png" alt="Paper" />
        </button>
        <button>
          <img src="/img/makas.png" alt="Scissors" />
        </button>
      </div>
      <div className="content-end">
        <button>
          <img src="/img/tas.png" alt="Rock" />
        </button>
      </div>
    </div>
    <div className="footer">
      <a href="#">RULES</a>
    </div>
  </div>
  )
}

export default App
