import type { JSX } from "react";
import { useState } from "react";
//import { GroupWrapper } from "../../components/GroupWrapper/GroupWrapper";
import "./style.css";
import { useNavigate } from "react-router-dom";

const questions = [
    "Šta ti se danas dobro desilo?",
    "Da li ti se nešto ružno desilo? Kako si se osećao/la posle toga?",
    "Izbaci ovde svoje ružne misli.",
    "Da li si danas uradio/la nešto lepo za sebe?",
    "Da li si se danas video/la sa nekim i kako si se osećao/la posle toga?",
];

export const Pitalice = (): JSX.Element => {
    const [answers, setAnswers] = useState<string[]>(
        Array(questions.length).fill("")
    );

    const handleChange = (index: number, value: string) => {
        setAnswers((prev) => {
            const updated = [...prev];
            updated[index] = value;
            return updated;
        });
    };

    const handleSave = () => {
        console.log("Sačuvani odgovori:", answers);

    };
    const navigate = useNavigate();
    return (
        <div className="pitalice-page">

            <main className="pitalice-content">
                <button className="back-button" onClick={() => navigate(-1)}>&#8249;</button>
                <h1 className="pitalice-title">Pitalice</h1>

                <div className="questions-list">
                    {questions.map((question, index) => (
                        <div className="question-item" key={index}>
                            <label className="question-text">{question}</label>
                            <input
                                type="text"
                                className="question-input"
                                value={answers[index]}
                                onChange={(e) =>
                                    handleChange(index, e.target.value)
                                }
                            />
                        </div>
                    ))}
                </div>

                <div className="save-container">
                    <button className="save-button" onClick={handleSave}>
                        Sačuvaj
                    </button>
                </div>
                <div className="paginacija-kontejner">
                    <button className="paginacija-strelica" onClick={() => navigate("/dnevnik")}>
                        &larr; Prethodna
                    </button>
                    <button className="paginacija-broj" onClick={() => navigate("/dnevnik")}>
                        1
                    </button>
                    <span className="aktivna-strana">2</span>
                </div>


            </main>

        
        </div>
    );
};