import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export const Registracija = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    ime: '',
    prezime: '',
    email: '',
    brojTelefona: '',
    lozinka: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    console.log('Podaci za registraciju:', formData);
    navigate('/Pocetna');
  };

  return (
    <main className="glavni-sadrzaj">
      <h1 className="naslov">Registracija</h1>

      <form onSubmit={handleSubmit} className="forma-registracija">
        <div className="polje-unosa">
          <label>Ime:</label>
          
          <input type="text" name="ime" value={formData.ime} onChange={handleChange} required />
        </div>

        <div className="polje-unosa">
          <label>Prezime:</label>
          <input type="text" name="prezime" value={formData.prezime} onChange={handleChange} required />
        </div>

        <div className="polje-unosa">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="polje-unosa">
          <label>Broj telefona:</label>
          <input type="tel" name="brojTelefona" value={formData.brojTelefona} onChange={handleChange} required />
        </div>

        <div className="polje-unosa">
          <label>Lozinka:</label>
          <input type="password" name="lozinka" value={formData.lozinka} onChange={handleChange} required />
        </div>

        <div className="kontejner-dugme">
          <button type="submit" className="dugme-registracija">
            Registruj se
          </button>
        </div>
      </form>
    </main>
  );
};

export default Registracija;