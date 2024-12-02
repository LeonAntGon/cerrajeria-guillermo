"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Instagram, Facebook } from 'lucide-react'

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;

      // Si el scroll es hacia abajo, ocultar el header
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        // Si el scroll es hacia arriba, mostrar el header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const [isOpen, setIsOpen] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const closeMenu = () => setIsOpen(false)

  const menuItems = [
    { href: "#servicios", label: "Servicios" },
    { href: "#sobre-nosotros", label: "Info" },
    { href: "#contacto", label: "Nuestro Local" },
    { href: "#testimonios", label: "Testimonios"},
    { href: "https://www.instagram.com/gui_llermocerrajeriaok/", label: "Instagram", icon: Instagram },
    { href: "https://www.facebook.com/people/Guillermo-Cerrajer%C3%ADa/100071606172948/?_rdr", label: "Facebook", icon: Facebook },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 py-4 px-6 bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}
    style={{ zIndex: 1000 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex">
        <span className="text-2xl font-bold mr-2 text-[#f2d492]">Cerrajería Guillermo </span>
        <svg width="28px" height="28px" stroke-width="1.7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#f2d492"><path d="M14 12C14 14.2091 15.7909 16 18 16C20.2091 16 22 14.2091 22 12C22 9.79086 20.2091 8 18 8C15.7909 8 14 9.79086 14 12ZM14 12H2V15" stroke="#f2d492" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 12V15" stroke="#f2d492" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
        
        
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          <a href="tel:+5493815818139"><div className="rounded-md px-5 py-3 bg-green-300 cursor-pointer"> <p className="text-black font-semibold flex">
          <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      style={{
        animation: 'phone 1.5s cubic-bezier(1,.01,.75,2.17) both infinite',
      }}
    >
      <style>
        {`
          @keyframes phone {
            0%, to { transform: rotate(0deg); transform-origin: 0 100%; }
            10%, 90% { transform: rotate(2deg); }
            20%, 40%, 60% { transform: rotate(-4deg); }
            30%, 50%, 70% { transform: rotate(4deg); }
            80% { transform: rotate(-2deg); }
          }
        `}
      </style>
      <path
        fill="#0A0A30"
        d="M15.758 19a10.761 10.761 0 01-7.603-3.162A10.805 10.805 0 015 8.22c0-.854.339-1.673.941-2.277A3.21 3.21 0 018.214 5c.18-.001.36.015.537.05.172.024.34.067.503.125a.699.699 0 01.455.525l.957 4.2a.7.7 0 01-.182.644c-.09.098-.098.105-.957.553a6.93 6.93 0 003.402 3.423c.454-.868.461-.875.559-.966a.699.699 0 01.643-.182l4.191.959a.699.699 0 01.503.455A3.046 3.046 0 0119 15.829a3.223 3.223 0 01-.968 2.255 3.21 3.21 0 01-2.274.916zM8.215 6.4a1.822 1.822 0 00-1.817 1.82 9.396 9.396 0 002.744 6.63 9.36 9.36 0 006.617 2.75 1.821 1.821 0 001.817-1.82v-.231l-3.242-.75-.202.386c-.315.609-.545 1.05-1.132.812a8.276 8.276 0 01-5.016-5.047c-.251-.546.224-.798.824-1.113l.385-.189L8.444 6.4h-.23z"
      />
    </svg>
          Llamar Ahora</p></div></a>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <div>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </div>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px]">
            <nav className="flex flex-col space-y-4 mt-[54px]">
            {menuItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="hover:underline flex items-center space-x-1"
              target={item.icon ? "_blank" : undefined}
              rel={item.icon ? "noopener noreferrer" : undefined}
            >
              {item.icon && <item.icon className="w-5 h-5" />}
              <span className={item.icon ? "sr-only md:not-sr-only text-black" : ""}>{item.label}</span>
            </Link>
          ))}
              <a href="tel:+5493815818139"><div className="rounded-md px-5 py-3 bg-green-300 cursor-pointer flex">
              <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      style={{
        animation: 'phone 1.5s cubic-bezier(1,.01,.75,2.17) both infinite',
      }}
    >
      <style>
        {`
          @keyframes phone {
            0%, to { transform: rotate(0deg); transform-origin: 0 100%; }
            10%, 90% { transform: rotate(2deg); }
            20%, 40%, 60% { transform: rotate(-4deg); }
            30%, 50%, 70% { transform: rotate(4deg); }
            80% { transform: rotate(-2deg); }
          }
        `}
      </style>
      <path
        fill="#0A0A30"
        d="M15.758 19a10.761 10.761 0 01-7.603-3.162A10.805 10.805 0 015 8.22c0-.854.339-1.673.941-2.277A3.21 3.21 0 018.214 5c.18-.001.36.015.537.05.172.024.34.067.503.125a.699.699 0 01.455.525l.957 4.2a.7.7 0 01-.182.644c-.09.098-.098.105-.957.553a6.93 6.93 0 003.402 3.423c.454-.868.461-.875.559-.966a.699.699 0 01.643-.182l4.191.959a.699.699 0 01.503.455A3.046 3.046 0 0119 15.829a3.223 3.223 0 01-.968 2.255 3.21 3.21 0 01-2.274.916zM8.215 6.4a1.822 1.822 0 00-1.817 1.82 9.396 9.396 0 002.744 6.63 9.36 9.36 0 006.617 2.75 1.821 1.821 0 001.817-1.82v-.231l-3.242-.75-.202.386c-.315.609-.545 1.05-1.132.812a8.276 8.276 0 01-5.016-5.047c-.251-.546.224-.798.824-1.113l.385-.189L8.444 6.4h-.23z"
      />
    </svg> 
    <p className="text-black font-semibold">Llamar Ahora</p></div></a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

