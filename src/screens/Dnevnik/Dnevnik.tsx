
import { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export const Dnevnik = ()  => {
  const [naslov, setNaslov] = useState('');
  const [datum, setDatum] = useState('');
  const [tekst, setTekst] = useState('');
  const navigate = useNavigate();

  return (
    <div className="stranica">
    
      <h1 className="glavni-naslov">Dnevnik</h1>

      <div className="red-inputa">
        <div className="polje">
          <label>Naslov:</label>
          <input 
            type="text" 
            value={naslov} 
            onChange={(e) => setNaslov(e.target.value)} 
          />
        </div>
        
        <div className="polje">
          <label>Datum:</label>
          <input 
            type="text" 
            placeholder="dd.mm.gggg." 
            value={datum} 
            onChange={(e) => setDatum(e.target.value)} 
          />
        </div>
      </div>

      <div className="dnevnik-prozor">
        <textarea
          className="dnevnik-tekst"
          placeholder="Dragi dnevniče,..."
          value={tekst}
          onChange={(e) => setTekst(e.target.value)}
        />
        <div className="paginacija-kontejner">
          <span className="aktivna-strana">1</span>
          <button className="paginacija-broj" onClick={() => navigate('/pitalice')}>2</button>

        <button className="strelica-button" onClick={() => navigate('/pitalice')}></button>
        </div>
      </div>
    </div>
  );
};