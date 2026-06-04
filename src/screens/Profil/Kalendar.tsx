import { useState } from "react";
import "./kalendar.css";
 
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
 
export const Kalendar = () => {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
 
  const years = Array.from({ length: 10 }, (_, i) => today.getFullYear() - 5 + i);
 
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
 
  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
 
  const isToday = (day: number | null) =>
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();
 
  return (
    <div className="kalendar">
      <div className="kalendar-header">
        <div className="kalendar-selects">
          <div className="select-wrapper">
            <select
              value={month}
              onChange={(e) => setMonth(Number(e.target.value))}
              className="kalendar-select"
            >
              {MONTHS.map((m, i) => (
                <option key={m} value={i}>{m}</option>
              ))}
            </select>
          </div>
          <div className="select-wrapper">
            <select
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              className="kalendar-select"
            >
              {years.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
 
      <div className="kalendar-grid">
        {DAYS.map((d) => (
          <div key={d} className="kalendar-day-name">{d}</div>
        ))}
        {cells.map((day, i) => (
          <div
            key={i}
            className={`kalendar-cell ${day === null ? "empty" : ""} ${isToday(day) ? "today" : ""}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Kalendar;