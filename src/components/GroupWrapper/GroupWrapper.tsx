import type { JSX } from "react";
import "./style.css";

export interface GroupWrapperProps {
    className: string;
}

export const GroupWrapper = ({ className }: { className: string }) => {
  return (
    <footer className="glavni-footer">
      <div className="footer-kolona">
        <strong>Kontakt:</strong>
        <span>060 123 456</span>
      </div>
      <div className="footer-kolona">
        <strong>Email:</strong>
        <span>oslobodimisli@gmail.com</span>
      </div>
    </footer>
  );
};