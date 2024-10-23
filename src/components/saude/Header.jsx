import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";

export function Header({children}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-gray-800 shadow border-b p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo (Desktop) */}
        <div className="hidden md:flex items-center">
          {children}
        </div>
        
        {/* Logo (Mobile) */}
        <div className="md:hidden flex-grow text-center self-center">
          {children}
        </div>

        {/* Botão para abrir o menu (Mobile) */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring"
          onClick={toggleMenu}
        >
          {isMenuOpen ? 'Fechar' : <CiMenuBurger className='size-8'/>}
        </button>

        {/* Menu de Navegação (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          <div className="relative group">
            <button className="hover:underline">Saúde</button>
            <div className="absolute left-0 hidden mt-0 bg-gray-100 group-hover:block z-50">
              <a href="/saude/plano" className="block px-4 py-2 hover:bg-gray-200">Plano Costa</a>
              <a href="/saude/ambulancias" className="block px-4 py-2 hover:bg-gray-200">Costa Ambulâncias</a>
              <a href="/saude/centroclinico" className="block px-4 py-2 hover:bg-gray-200">Centro Clínico</a>
            </div>
          </div>
          <div className="relative group">
            <button className="hover:underline">Luto</button>
            <div className="absolute left-0 hidden mt-0 bg-gray-100 group-hover:block z-50">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Funerária Costa</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Memorial da Paz</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Capela Santo Antônio</a>
            </div>
          </div>
          <a href="#contato" className="hover:underline">Emergência</a>
          <a href="#saibamais" className="hover:underline">Saiba Mais</a>
          <a href="#contato" className="hover:underline">Contato</a>
        </nav>
      </div>

      {/* Menu de Navegação (Mobile) */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 p-4">
          <nav className="flex flex-col space-y-2">
            <div className="relative group">
              <button className="w-full text-left">Saúde</button>
              <div className="absolute left-0 hidden mt-2 bg-gray-200 rounded-md group-hover:block">
                <a href="#" className="block px-4 py-2 hover:bg-gray-300">Plano Costa</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-300">Costa Ambulâncias</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-300">Centro Clínico</a>
              </div>
            </div>
            <div className="relative group">
              <button className="w-full text-left">Luto</button>
              <div className="absolute left-0 hidden mt-2 bg-gray-200 rounded-md group-hover:block">
                <a href="#" className="block px-4 py-2 hover:bg-gray-300">Funerária Costa</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-300">Memorial da Paz</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-300">Capela Santo Antônio</a>
              </div>
            </div>
            <a href="#" className="hover:underline">Emergência</a>
            <a href="#" className="hover:underline">Saiba Mais</a>
            <a href="#" className="hover:underline">Contato</a>
          </nav>
        </div>
      )}
    </header>
  );
};







/*import React, {useState, useEffect, useRef} from 'react'

export function Header() {
    const [isHeroVisible, setIsHeroVisible] = useState(true); // Estado que controla a visibilidade da Hero
    const heroRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null, // Observa dentro da viewport
            rootMargin: '0px',
            threshold: 0, // Aciona quando qualquer parte está fora
        };
    
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsHeroVisible(true); // Hero está visível
                } else {
                    setIsHeroVisible(false); // Hero não está visível
                }
            });
        };
    
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        if (heroRef.current) {
            observer.observe(heroRef.current);
        }
    
        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full transition-colors duration-300 ${
            isHeroVisible ? 'bg-transparent text-slate-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]' : 'bg-white shadow-md text-slate-800'
            } z-50 `}>
        <div className="container flex justify-between px-16 py-4 items-center w-full">
            <div>
                <h1 className="flex text-2xl font-extralight">PLANO<span className="font-bold text-violet-800">COSTA</span></h1>
            </div>
            <nav className="flex gap-6 items-center">

            <div className="group relative cursor-pointer py-2">

            <div className="flex items-center">
                <a className="menu-hover text-base font-normal lg:mx-3">
                    Saúde
                </a>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="h-4 w-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </span>
            </div>

                <div className="invisible absolute z-50 flex w-fit text-left flex-col bg-slate-50 py-1 pt-6 shadow-xl text-slate-700 group-hover:visible ">
                    <a href="/saude/plano" className="my-2 block border-b border-gray-100 py-1 font-normal hover:brightness-150 md:mx-2">
                        Plano Costa
                    </a>

                    <a href="/saude/centroclinico" className="my-2 block border-b border-gray-100 py-1 font-normal hover:brightness-150 md:mx-2">
                        Centro Clínico
                    </a>

                    <a href="/saude/ambulancias" className="my-2 block border-b border-gray-100 py-1 font-normal hover:brightness-150 md:mx-2">
                        Costa Ambulâncias
                    </a>

                </div>
            </div>

                <a href="#contact" className="hover:brightness-150">Emergência</a>
                <a href="#info" className="hover:brightness-150">Saiba mais</a>
                <a href="#contact" className="hover:brightness-150">Contato</a>
            </nav>
        </div>
</header>
    )
}*/