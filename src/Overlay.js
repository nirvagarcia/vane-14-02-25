import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './Overlay.css';
import ubi from './assets/ubi.png'; 

const Overlay = ({ onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 500); // Espera a que la transición termine
  };

  return (
    <div className={`overlay ${visible ? 'show' : 'hide'}`}>    
      <div className="modal">
        <div className="modal-content">
          <div className="modal-close-button">
            <IconButton className="close-button" onClick={handleClose}>
              <CloseIcon/>
            </IconButton>
          </div>
          <h2>Te tocó, señorita Villalobos</h2>
          <p>
            Hoy nos dirigiremos a{' '}
            <a
              href="https://maps.app.goo.gl/UPwLf5YikqhcWaHk9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Parque María Reiche, Miraflores
            </a>
          </p>
          <img src={ubi} alt="Ubicación" className="location-image" />
          <p><strong>Hora:</strong> 4:30pm</p>
          <p>Ponte bonita (aunque siempre lo estás), que tu taxi llega a las <strong>4:00pm</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Overlay;