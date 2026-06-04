import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pisanje_Bloga.css';

export const Pisanje_Bloga = () => {
    const navigate = useNavigate();
    const [naslov, setNaslov] = useState('');
    const [datum, setDatum] = useState('');
    const [sadrzaj, setSadrzaj] = useState('');

    
    const handleObjavi = (e: React.SubmitEvent) => {
        e.preventDefault(); 
        console.log('Blog je objavljen:', { naslov, datum, sadrzaj });
        navigate('/Pocetna');
    };

    return (
        <div className="pisanje-stranica-kontejner">
            <div className="Pisanje_Bloga">
                <h1 className="glavni-naslov">Blog</h1>

                <form onSubmit={handleObjavi} className="blog-forma">
                    
                    <div className="forma-gornji-red">
                        <div className="forma-grupa naslov-grupa">
                            <label className="labela-stil">Naslov:</label>
                            <input 
                                type="text"
                                className="input-naslov" 
                                value={naslov}
                                onChange={(e) => setNaslov(e.target.value)}
                                required
                            />
                        </div>

                        <div className="forma-grupa datum-grupa">
                            <label className="labela-stil">Datum:</label>
                            <input 
                                type="text" 
                                placeholder="DD.MM.GGGG."
                                className="input-datum"
                                value={datum}
                                onChange={(e) => setDatum(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                  
                    <div className="blog-content-area">
                        <textarea 
                            className="textarea-sadrzaj" 
                            placeholder="Napiši svoj blog..."
                            value={sadrzaj}
                            onChange={(e) => setSadrzaj(e.target.value)}
                            required
                        />
                    </div>

                  
                    <div className="button-zona">
                        <button type="submit" className="dugme-objavi">
                            OBJAVI
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};