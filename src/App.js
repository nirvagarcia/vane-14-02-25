import React, { useState } from 'react';
import './App.css';
import doggo from './assets/doggo.png';
import furia from './assets/furia.png';
import tristeza from './assets/tristeza.png';
import Overlay from './Overlay';

function App() {
  const [noButtonClickCount, setNoButtonClickCount] = useState(0);
  const [showDoggo, setShowDoggo] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleNoClick = () => {
    setNoButtonClickCount(prevCount => prevCount + 1);
    if (noButtonClickCount + 1 >= 3) {
      setShowDoggo(true);
    }
  };

  const handleYesClick = () => {
    setShowDoggo(true);
    setNoButtonClickCount(3);
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div className="App">
      <div className="navbar">
        <p>Para Vann, de Niri🦦</p>
      </div>
      <header className="App-header">
        <p>
          ¿Me darías el honor de ser su San Valentin (adelantado)?
        </p>
        <div className={`button-container ${noButtonClickCount >= 3 ? 'center-yes-btn' : ''}`}>
          <button className={`btn yes-btn ${noButtonClickCount >= 3 ? 'enlarge' : ''}`} onClick={handleYesClick}>Sí</button>
          {noButtonClickCount < 3 && (
            <button
              className={`btn no-btn ${noButtonClickCount >= 3 ? 'shrink' : ''}`}
              onClick={handleNoClick}
              style={{ transform: `scale(${1 - noButtonClickCount * 0.3})` }}
            >
              No
            </button>
          )}
        </div>
        {noButtonClickCount === 1 && !showDoggo && (
          <img src={furia} alt="Furia" className="furia" />
        )}
        {noButtonClickCount === 2 && !showDoggo && (
          <img src={tristeza} alt="Tristeza" className="tristeza" />
        )}
        {showDoggo && (
          <img src={doggo} alt="Doggo" className="doggo slideUpCenter" />
        )}
      </header>
      {showOverlay && <Overlay onClose={handleCloseOverlay} />}
    </div>
  );
}

export default App;