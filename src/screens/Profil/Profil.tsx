import './style.css';
import { Kalendar } from './Kalendar';

export const Profil = () => {
  return (
    <div className="stranica-profil">
      <div className="profil-korisnika">
        
        <div className="profil-podaci">
          <div className="text-wrapper-10">Zdravo!</div>
          <div className="ime-prezime-email">
            Ime: <br />
            Prezime: <br />
            Email: <br />
            Broj telefona: 
          </div>
        </div>
        
        <div className="profil-kalendar">
          <Kalendar />
        </div>

      </div>
    </div>
  );
};