import type { JSX } from "react";
import { Link } from "react-router-dom"; 
import "./style.css";

export interface GroupProps {
  className: string;
}

export const Group = ({ className }: GroupProps): JSX.Element => {
  return (
    <nav className="glavni-navbar">
      
      <div className="logo-placeholder"></div> 

      <div className="meni-links">
        
        <Link to="/" className="meni-stavka">POČETNA</Link>
        <Link to="/blog" className="meni-stavka">BLOG</Link>
        <Link to="/prijava" className="meni-stavka">PRIJAVA</Link>
        <Link to="/registracija" className="meni-stavka">REGISTRACIJA</Link>
      </div>
    </nav>
  );
};