import { PiSiren } from "react-icons/pi";
import { TbBuildingHospital } from "react-icons/tb";
import { LuPartyPopper } from "react-icons/lu";
import { MdLocalPhone } from "react-icons/md";
import { FaWhatsapp, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import React from "react";
import {Header} from "../../components/saude/Header";
import { Depoimento } from "../../components/Depoimento";
import Logo from '/images/costaambulancias.jpg'

export function Ambulancias() {

    return (
        <div className="relative">
        <Header>
            <img src={Logo} className="h-10"/>
        </Header>
        <main>
            <div>
                <section className="bg-slate-100 w-fit h-fit flex flex-col md:flex-row justify-center md:justify-evenly items-center text-center md:text-left gap-10 md:gap-16 py-36 px-8 md:px-40">
                    <div className="md:w-1/2 flex flex-col">
                        <h1 className="text-slate-900 text-5xl md:text-6xl font-bold mb-4">Emergências e remoções, conte com a Costa Ambulâncias</h1>
                        <p className="text-slate-500 text-xl mb-14">Atendimento rápido e especializado com cobertura 24 horas em Taquari e região.</p>
                        <nav className="flex gap-6">
                            <a href="#info"><button className="text-blue hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-slate-400 bg-blue-600 px-3 text-slate-50 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 hover:border-blue-500 before:transition-all before:duration-500 hover:text-white hover:shadow-blue-500 hover:before:left-0 hover:before:w-full m-auto"><span class="relative z-10">Saiba mais</span></button></a>
                            <a href="#contact"><button className="text-blue hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-slate-400 bg-transparent px-3 text-slate-800 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-slate-800 hover:shadow-white hover:before:left-0 hover:before:w-full m-auto"><span class="relative z-10">Contato</span></button>  </a>
                        </nav>
                    </div>
                    <div className="md:w-1/2">
                        <img src="/images/ambulancia.jpg" alt="" className="h-full shadow-xl brightness-75"/>
                    </div>
                </section>
            </div>
            <section id="info" className="flex flex-col gap-20 bg-white w-full md:p-40 pb-32">
                <div className="md:w-1/2 mt-32 px-6 md:mt-0 md:px-6 text-center md:text-left">
                    <span className="text-4xl text-slate-700 font-semibold">Nossos Serviços</span>
                    <p className="text-slate-500 mt-6">Na Costa Ambulâncias, oferecemos uma ampla gama de serviços de transporte e resgate emergencial, sempre com profissionais qualificados e equipamentos de última geração:</p>
                </div>
                <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-center items-baseline md:justify-around px-6 md:px-0">
                    <div className="md:w-1/4 h-60 border border-slate-600/40 flex flex-col items-start text-left p-4 gap-2 shadow-md hover:border-blue-500 hover:shadow-blue-500/40 transition-all">
                        <div className="p-4 rounded-full bg-blue-100 w-fit">
                            <PiSiren className="size-8 md:size-10 text-blue-600"/>
                        </div>
                        <span className="text-xl text-slate-700">Emergência 24h Horas</span>
                        <p className="text-slate-500">Atendimento imediato para situações críticas, com transporte rápido e seguro.</p>
                    </div>
                    <div className="md:w-1/4 h-60 border border-slate-600/40 flex flex-col items-start text-left p-4 gap-2 shadow-md hover:border-blue-500 hover:shadow-blue-500/40 transition-all">
                        <div className="p-4 rounded-full bg-blue-100 w-fit">
                            <TbBuildingHospital className="size-8 md:size-10 text-blue-600"/>
                        </div>
                        <span className="text-xl text-slate-700">Transporte Inter-Hospitalar</span>
                        <p className="text-slate-500">Transferências seguras entre hospitais com suporte especializado.</p>
                    </div>
                    <div className="md:w-1/4 h-60 border border-slate-600/40 flex flex-col items-start text-left p-4 gap-2 shadow-md hover:border-blue-500 hover:shadow-blue-500/40 transition-all">
                        <div className="p-4 rounded-full bg-blue-100 w-fit">
                            <LuPartyPopper className="size-8 md:size-10 text-blue-600"/>
                        </div>
                        <span className="text-xl text-slate-700">Cobertura de Eventos</span>
                        <p className="text-slate-500">Suporte de emergência em eventos de grande porte, garantindo a segurança de todos.</p>
                    </div>
                </div>
                <button className="text-blue hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-slate-800/40 bg-white px-3 text-slate-800 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 hover:border-blue-500 before:transition-all before:duration-500 hover:text-white hover:shadow-blue-500 hover:before:left-0 hover:before:w-full m-auto"><span class="relative z-10">Entre em contato</span></button>
            </section>
            <section className="bg-slate-100 w-full flex flex-col gap-24 pb-32 pt-44">
                <div className="md:mx-40 text-center">
                    <h2 className="text-4xl text-slate-800 font-semibold">Uma frota <span className="text-blue-600">moderna</span> e completa</h2>
                    <p className="text-slate-500 text-lg mt-2">Nossa frota é composta por veículos equipados com tecnologia de ponta, prontos para lidar com qualquer situação de emergência.</p>
                </div>
                
                <div className="snap-x snap-mandatory flex gap-1 p-2 md:p-8 w-full">
                    <div className="snap-center w-full">
                        <img src="/images/ambulancia.jpg" alt="" className="object-cover md:saturate-0 hover:saturate-100 hover:-translate-y-1 transition-all duration-300 ease-in-out h-96 w-max snap-center"/>
                    </div>
                    <div className="snap-center w-full">
                        <img src="/images/ambulancia.jpg" alt="" className="object-cover md:saturate-0 hover:saturate-100 hover:-translate-y-1 transition-all duration-300 ease-in-out h-96 snap-center"/>
                    </div>
                    <div className="snap-center w-full">
                        <img src="/images/ambulancia.jpg" alt="" className="object-cover md:saturate-0 hover:saturate-100 hover:-translate-y-1 transition-all duration-300 ease-in-out h-96 snap-center"/>
                    </div>
                    <div className="snap-center w-full">
                        <img src="/images/ambulancia.jpg" alt="" className="object-cover md:saturate-0 hover:saturate-100 hover:-translate-y-1 transition-all duration-300 ease-in-out h-96 snap-center"/>
                    </div>
                    <div className="snap-center w-full">
                        <img src="/images/ambulancia.jpg" alt="" className="object-cover md:saturate-0 hover:saturate-100 hover:-translate-y-1 transition-all duration-300 ease-in-out h-96 snap-center"/>
                    </div>
                    <div className="snap-center w-full">
                        <img src="/images/ambulancia.jpg" alt="" className="object-cover md:saturate-0 hover:saturate-100 hover:-translate-y-1 transition-all duration-300 ease-in-out h-96 snap-center"/>
                    </div>
                </div>

            </section>
            <section className="bg-white flex flex-col gap-16 justify-center items-center py-32 px-4 md:px-0">
                <div className="text-center md:text-left md:w-1/3">
                    <h3 className="text-4xl text-slate-800 font-semibold mb-4">Emergência a Qualquer Hora do Dia ou da Noite</h3>
                    <p className="text-lg text-slate-600">Estamos à disposição 24 horas por dia, 7 dias por semana, para garantir a sua segurança. Basta ligar para nossa central de atendimento, e uma ambulância estará a caminho.</p>
                </div>
                <div className="flex flex-col justify-center items-center md:justify-start md:items-start w-80">
                    <button className="text-blue hover:before:bg-redborder-red-500 relative h-[50px] w-full overflow-hidden border border-slate-400/40 bg-transparent px-3 text-slate-800 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-slate-800 before:transition-all before:duration-500 hover:text-white hover:shadow-slate-500 hover:before:left-0 hover:before:w-full mt-2"><span class="relative z-10">Acionar Equipe</span></button>
                </div>
            </section>
            <section className="bg-slate-100 flex flex-col justify-center py-32 px-4 md:px-0 gap-16">
                <div className="flex flex-col gap-6 text-center">
                    <span className="text-4xl text-slate-800 font-semibold">O que nossos clientes falam</span>
                    <p className="text-slate-600 text-lg">Nossa prioridade é garantir o atendimento mais eficiente e seguro possível. Veja o que nossos clientes têm a dizer:</p>
                </div>
                <div className="flex flex-col md:flex-row justify- items-center md:justify-around gap-12 md:gap-0">
                    <Depoimento 
                        name="Fulano de Tal"
                        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit doloremque ea iusto eos. Magnam, debitis blanditiis eos voluptatum."    
                    />
                    <Depoimento 
                        name="Fulano de Tal"
                        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit doloremque ea iusto eos. Magnam, debitis blanditiis eos voluptatum."    
                    />
                    <Depoimento 
                        name="Fulano de Tal"
                        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit doloremque ea iusto eos. Magnam, debitis blanditiis eos voluptatum."    
                    />
                    <Depoimento 
                        name="Fulano de Tal"
                        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit doloremque ea iusto eos. Magnam, debitis blanditiis eos voluptatum."    
                    />
                </div>
            </section>
            <section className="text-center md:text-left flex flex-col py-32 px-4 md:p-40 gap-16 bg-white">
                <span className="text-3xl text-slate-900 font-semibold mx-auto">Dúvidas frequentes</span>
                <div className="flex flex-col md:flex-row justify-center items-center md:items-baseline md:justify-around gap-12 md:gap-0">
                    <div className="flex flex-col md:w-1/2">
                        <span className="text-lg italic text-slate-600 font-light">Quanto tempo demora para uma ambulância chegar?</span>
                        <span className="text-slate-800">O tempo de resposta depende da localização, mas nossas equipes estão estrategicamente posicionadas para garantir atendimento rápido em Taquari e região.</span>
                    </div>
                    <div className="flex flex-col md:w-1/3">
                        <span className="text-lg italic text-slate-600 font-light">O serviço é coberto para clientes do Plano?</span>
                        <span className="text-slate-800">Sim, em caso de emergências o transporte é gratuito para clientes do Plano Costa</span>
                    </div>
                </div>
            </section>
            <section id="contact" className="bg-slate-100 flex justify-evenly py-32 px-2">
                <div>
                    <span className="text-2xl font-semibold text-slate-900">Contato</span>
                    <div className="flex flex-col mt-8 gap-4">
                        <span className="flex items-center gap-2 text-lg text-slate-800"><MdPlace className="size-6"/>Travessa 4 de Julho, 30, Centro, Taquari, RS</span>
                        <span className="flex items-center gap-2 text-lg text-slate-800"><MdLocalPhone className="size-6"/>(51) 99999-9999</span>
                        <span className="flex items-center gap-2 text-lg text-slate-800"><MdLocalPhone className="size-6"/>(51) 99999-9999</span>
                        <span className="flex items-center gap-2 text-lg text-slate-800"><FaWhatsapp className="size-6"/>(51) 99999-9999</span>
                    </div>
                </div>
                <div>
                    <span className="text-2xl font-semibold text-slate-900">Redes Sociais</span>
                    <div className="flex flex-col mt-8 gap-4">
                        <a href="https://instagram.com/costa.ambulancias" className="flex items-center gap-2 text-lg text-slate-800 hover:text-fuchsia-500 transition-all"><FaInstagram className="size-6"/>@costa.ambulancias</a>
                        <a href="https://instagram.com/costa.ambulancias" className="flex items-center gap-2 text-lg text-slate-800 hover:text-blue-500 transition-all"><FaFacebookSquare className="size-6"/>Plano Costa</a>
                        <a className="flex items-center gap-2 w-fit text-slate-800 hover:text-emerald-500 transition-all" href=""><FaWhatsapp className="size-6"/><button className="text-blue hover:before:bg-redborder-red-500 relative overflow-hidden border border-slate-500 bg-transparent backdrop-blur-sm px-2 py-1 text-slate-800 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-emerald-500 hover:border-emerald-500 before:transition-all before:duration-500 hover:text-white hover:shadow-emerald-500 hover:before:left-0 hover:before:w-full m-auto"><span class="relative z-10">Iniciar Conversa</span></button></a>
                    </div>
                </div>
            </section>
        </main>
        </div>
    )
}