import { useNavigate } from "react-router-dom"; 
//import { Group } from "../../components/Group";
//import { GroupWrapper } from "../../components/GroupWrapper";

import "./style.css";

export const Pocetna = () => {
  const navigate = useNavigate();
  return (
    <div className="pocetna-container">
      <h1 className="glavni-naslov">Oslobodi misli</h1>
      <button 
        className="zapocni-dugme" 
        onClick={() => navigate('/dnevnik')}
      >
        Započni
      </button>
    </div>
  );
};