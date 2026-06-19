import React from "react";
import "./style.css"; 

interface GroupWrapperProps {
  children: React.ReactNode;
}

export const GroupWrapper = ({ children }: GroupWrapperProps) => {
  return (
    <div className="group-wrapper-kontejner">

      <main className="wrapper-sadrzaj">
        {children}
      </main>
     
      <footer className="moj-futer">
        <div className="futer-kolona">
          <h3>Kontakt:</h3>
          <p>060 123 456</p>
        </div>
        <div className="futer-kolona">
          <h3>Email:</h3>
          <p>oslobodimisli@gmail.com</p>
        </div>
      </footer>
    </div>
  );
};