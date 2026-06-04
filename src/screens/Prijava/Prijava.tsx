//import { Group } from "./Group";
//import { GroupWrapper } from "./components/GroupWrapper";
import { useNavigate } from "react-router-dom";

import "./style.css"

export const Prijava = ()  => {
    const navigate = useNavigate();
return (
    <div className="prijava">
        <div className="text-wrapper-4">Prijavi se</div>
        <div className="text-wrapper-5">"Email:"</div>
        <p className="lozinka">
            <span className="span">Lozinka</span>
            <span className="text-wrapper-6">:</span>
        </p>

        <div className="group-2" onClick={() => navigate("/profil")}>
            <div className="rectangle-2" ></div>
            <div className="text-wrapper-7">Prijava</div>
        </div>
    </div>
);
};
