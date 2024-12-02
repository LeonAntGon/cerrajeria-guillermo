import React, { useState } from 'react';
import { Instagram, Facebook } from 'lucide-react'
import Link from 'next/link'

const Footer: React.FC = () => {
  const phoneNumber = '+54 9 381 581-8139';
  const [isCopied, setIsCopied] = useState<boolean>(false); // Estado para verificar si se ha copiado

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setIsCopied(true); // Cambiar el estado a copiado
      setTimeout(() => setIsCopied(false), 2000); // Restablecer el estado después de 2 segundos
    } catch (err) {
      console.error('Error al copiar el número: ', err);
    }
  };

  return (
    <footer className="py-6 bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900">
      <div className="mx-auto text-center flex justify-center flex-wrap flex-col content-center">
      <p className="mt-2 cursor-pointer flex text-center" onClick={copyToClipboard}>
          Teléfono: {phoneNumber}
          {/* SVG de copiar */}
          {!isCopied ? (
            <svg width="24px" height="24px" strokeWidth="1.7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff">
              <path d="M19.4 20H9.6C9.26863 20 9 19.7314 9 19.4V9.6C9 9.26863 9.26863 9 9.6 9H19.4C19.7314 9 20 9.26863 20 9.6V19.4C20 19.7314 19.7314 20 19.4 20Z" stroke="#ffffff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M15 9V4.6C15 4.26863 14.7314 4 14.4 4H4.6C4.26863 4 4 4.26863 4 4.6V14.4C4 14.7314 4.26863 15 4.6 15H9" stroke="#ffffff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          ) : (
            // SVG de copiado
            <svg width="28px" height="28px" strokeWidth="1.7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#86efac">
              <path d="M5 13L9 17L19 7" stroke="#86efac" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          )}
        </p>
        <p>&copy; 2024 Cerrajería Guillermo. Todos los derechos reservados.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <Link 
            href="https://www.instagram.com/cerrajeriaguillermo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
          >
            <Instagram className="w-6 h-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link 
            href="https://www.facebook.com/cerrajeriaguillermo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
          >
            <Facebook className="w-6 h-6" />
            <span className="sr-only">Facebook</span>
          </Link>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;