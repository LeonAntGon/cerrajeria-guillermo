import React from 'react';
import './Button.css'; // Asegúrate de que el CSS esté en este archivo

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button className="button">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
      </svg>
      <div className="text">
        <p className='text-gray-100 font-semibold underline'>{label}</p>
      </div>
    </button>
  );
};

export default Button;