import { Header } from "../../components/Header"
import React, {useState, useEffect, useRef} from 'react'

export function CentroClinico() {
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
    
    return(
        <>
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
        <main>
            <div ref={heroRef}>
                <section className="bg-[url('/images/medic.jpg')] bg-fixed saturate-100 w-vw h-dvh flex flex-col gap-12 justify-center items-center py-32 md:p-60 md:px-40 bg-cover text-center" >
                    <h1 className="text-4xl text-slate-50 font-bold md:text-6xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)]">Cuidado Completo e Personalizado para Sua Saúde no Centro Clínico Costa</h1>
                    <span className="text-slate-100 text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)]">Atendimentos de múltiplas especialidades em Taquari</span>
                    <a href="#info"><button className="text-blue hover:before:bg-redborder-red-500 relative overflow-hidden border border-white/60 bg-transparent backdrop-blur-sm px-4 py-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white/20 hover:border-white/80 before:transition-all before:duration-500 hover:text-white hover:shadow-white/20 hover:before:left-0 hover:before:w-full m-auto"><span class="relative z-10">Agendar Agora</span></button></a>
                </section>
            </div>
            <section>
                <span>Especialidades Médicas ao Seu Alcance</span>
                <p>O Centro Clínico Costa oferece uma vasta gama de especialidades médicas, com profissionais altamente qualificados prontos para cuidar de você e de sua família. Algumas das especialidades disponíveis são:</p>
                <ul>
                    <li>Clínica Geral</li>
                    <li>Cardiologia</li>
                    <li>Psiquiatria</li>
                    <li>Neurologia</li>
                    <li>Ginecologia</li>
                    <li>Otorrinolaringologia</li>
                </ul>
                <div>
                    <button>Conheça os Profissionais</button>
                    <button>Agendar Consulta Agora</button>
                </div>
            </section>
            <section>
                <div>
                    <p>Agende sua Consulta de Forma Rápida e Fácil</p>
                    <p>No Centro Clínico Costa, oferecemos um sistema de agendamento online prático para que em apenas alguns cliques, você solicite o seu agendameto.</p>
                </div>
                <form action="">

                </form>
            </section>
            <section>
                <p>O Que Nossos Pacientes Dizem</p>
                <p>A confiança e o cuidado dos nossos pacientes são nossa maior motivação. Confira o que nossos pacientes têm a dizer sobre o atendimento no Centro Clínico Costa:</p>
                <div>

                </div>
            </section>
            <section>
                <p>Infraestrutura Moderna e Confortável</p>
                <p>O Centro Clínico Costa conta com uma infraestrutura moderna, garantindo conforto e segurança para nossos pacientes. Nossas instalações incluem:</p>
                <ul>
                    <li>Consultórios Amplos e Equipados</li>
                    <li>Sala de Exames</li>
                    <li>Área de Atendimento de Psicologia</li>
                    <li>Acessibilidade para pessoas com mobilidade reduzida</li>
                </ul>
            </section>
            <section>
                <p>Dúvidas Frequentes</p>
                <div>
                    <div>
                        <p>Qual é o horário de funcionamento do Centro Clínico Costa?</p>
                        <p>Nosso horário de atendimento é de segunda a sexta das 08:00 ao meio dia e aos sábados das 09:00 as 11:45</p>
                    </div>
                    <div>
                        <p>Como faço para agendar uma consulta?</p>
                        <p>Você pode agendar diretamente pelo nosso site na seção "Agendamento Online", entrando em contato pelo WhatsApp ou via ligação telefônica.</p>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}