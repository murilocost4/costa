import { GiTopaz } from "react-icons/gi";
import { SlPeople } from "react-icons/sl";
import { IoMdTime } from "react-icons/io";
import { MdOutlineAttachMoney, MdLocalPhone, MdPlace } from "react-icons/md";
import { GiEmerald } from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { RiMentalHealthLine } from "react-icons/ri";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaWhatsapp, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import React from "react";
import { Header } from "../../components/saude/Header";
import { Depoimento } from "../../components/Depoimento";
import Logo from '/images/planocosta.jpg'


export function Plano() {

    return(
        <div className="relative">

            <Header>
                <div className="flex flex-col text-center">
                <h3 className="font-extralight text-2xl">PLANO<span className="font-bold text-violet-800">COSTA</span></h3>
                <span className="text-xs font-normal text-slate-500">ASSISTÊNCIA FAMILIAR</span>
                </div>
            </Header>

            <main className="relative z-10">
                <div>
                    <section className="bg-slate-100 bg-fixed saturate-100 w-vw h-fit flex flex-col gap-12 justify-center items-center py-32 md:p-60 bg-cover text-center" >
                        <h1 className="text-4xl text-slate-900 font-bold md:text-6xl md:w-2/3">Cuidando da sua <span className="text-violet-600">saúde</span> com excelência</h1>
                        <span className="text-slate-600 text-lg">descrição breve</span>
                        <a href="#info"><button className="text-blue hover:before:bg-redborder-red-500 relative overflow-hidden border border-slate-800 bg-transparent backdrop-blur-sm px-4 py-3 text-slate-800 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-violet-600 hover:border-violet-600 before:transition-all before:duration-500 hover:text-white hover:shadow-white/20 hover:before:left-0 hover:before:w-full m-auto"><span className="relative z-10">Conheça nossos planos</span></button></a>
                    </section>
                </div>
                <section className="flex flex-col md:flex-row justify-around items-baseline py-28 px-4 md:px-0 gap-16 md:gap-0 md:p-40 bg-white">
                    <div className="flex flex-col text-center md:text-justify md:w-1/3">
                        <h2 className="text-2xl mb-4 text-sate-800">Sobre nós</h2>
                        <p className="text-slate-600">O Plano Costa, com sede em Taquari - RS, nasceu da dedicação ao cuidado com a saúde e o bem-estar da comunidade. Oferecemos um serviço completo de assistência à saúde, contando com um Centro Clínico próprio e uma vasta Rede Credenciada, que inclui clínicas médicas, laboratórios, farmácias, e até serviços de saúde com seu pet.</p>
                    </div>
                    <div className="flex flex-col text-center md:text-justify md:w-1/3">
                        <span className="text-2xl mb-4 text-sate-800">Missão</span>
                        <p className="text-slate-600">Proporcionar saúde de qualidade para famílias, com planos acessíveis e uma rede de confiança.</p>
                    </div>
                </section>
                <section id="info" className="bg-slate-100 flex flex-col gap-14 justify-center items-center py-28 w-full">
                    <span className="text-4xl font-semibold text-slate-800 text-center">Vantagens de ser Cliente do Plano Costa</span>
                    <div className="flex flex-col md:flex-row w-fit h-fit items-center justify-center text-left gap-10 md:gap-20">
                        <img className="w-3/4 md:w-1/3 shadow-xl" src="/images/medic.jpg" alt="" />
                        <ul className="flex flex-col gap-4 text-left w-fit pl-4 md:pl-0">
                            <li className="grid grid-flow-col items-center justify-start gap-3 text-lg text-slate-700"><FaRegCircleCheck className="text-violet-800 size-6"/><span>Acesso à Internações Hospitalares</span></li>
                            <li className="grid grid-flow-col items-center justify-start gap-3 text-lg text-slate-700"><FaRegCircleCheck className="text-violet-800 size-6"/><span>Acesso à Tratamentos Médicos Especializados</span></li>
                            <li className="grid grid-flow-col items-center justify-start gap-3 text-lg text-slate-700"><FaRegCircleCheck className="text-violet-800 size-6"/><span>Acesso à Tratamentos Odontológicos e Profissionais de Saúde</span></li>
                            <li className="grid grid-flow-col items-center justify-start gap-3 text-lg text-slate-700"><FaRegCircleCheck className="text-violet-800 size-6"/><span>Acesso à Exames Complementares e Laboratoriais</span></li>
                            <li className="grid grid-flow-col items-center justify-start gap-3 text-lg text-slate-700"><FaRegCircleCheck className="text-violet-800 size-6"/><span>Acesso à Ampla Rede de Convênios Regional</span></li>
                            <li className="grid grid-flow-col items-center justify-start gap-3 text-lg text-slate-700"><FaRegCircleCheck className="text-violet-800 size-6"/><span>Acesso à Ambulância Gratuita em Caso de Emergência</span></li>
                            <li className="grid grid-flow-col items-center justify-start gap-3 text-lg text-slate-700"><FaRegCircleCheck className="text-violet-800 size-6"/><span>Acesso à Equipamentos Ortopédicos e Hospitalares</span></li>
                            <li className="grid grid-flow-col items-center justify-start gap-3 text-lg text-slate-700"><FaRegCircleCheck className="text-violet-800 size-6"/><span>Acesso à Descontos no Comércio</span></li>

                        </ul>
                    </div>
                </section>
                <section className="bg-white flex flex-col items-center py-28 px-4 md:px-0 gap-16">
                    <div className="flex flex-col text-center">
                        <span className="text-4xl text-slate-800 font-semibold mb-6">Nossos Planos</span>
                        <p className="text-slate-600 text-lg">Encontre o plano ideal para você e sua <span className="text-violet-600">família</span>. Oferecemos opções para todos os perfis e <span className="text-violet-600">necessidades</span>:</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-16 md:gap-32 justify-center w-full">
                        <div className="flex flex-col w-4/5 md:w-1/5 m-auto md:m-0 bg-gradient-to-tr from-yellow-400 to-yellow-300 rounded-2xl p-5 gap-4 text-slate-50 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                            <div className="flex items-center gap-4">
                                <GiTopaz className="size-16"/>
                                <div className="flex flex-col justify-around h-16">
                                    <h4 className="text-xl font-semibold">Topázio Economic</h4>
                                    <span className="flex w-fit text-xs bg-slate-50 rounded-full text-yellow-300 font-semibold px-2 py-0.5 text-center items-center justify-center">Individual</span>
                                </div>
                            </div>
                            <div>
                                <ul>
                                    <li className="flex items-center justify-between border-b border-slate-400 py-2"><span className="font-light text-sm flex items-center gap-2"><SlPeople/>Vidas vinculadas</span><span>Até 2</span></li>
                                    <li className="flex items-center justify-between border-b border-slate-400 py-2"><span className="font-light text-sm flex items-center gap-2"><IoMdTime/>Carência</span><span>30 dias</span></li>
                                    <li className="flex items-center justify-between border-b border-slate-400 py-2"><span className="font-light text-sm flex items-center gap-2"><MdOutlineAttachMoney/>Mensalidade</span><span>R$19,99</span></li>
                                </ul>
                            </div>
                            <button className="w-full border-slate-50 border p-2 rounded-lg hover:bg-slate-50 hover:text-yellow-300 transition-all">Tenho Interesse</button>
                        </div>
                        <div className="flex flex-col w-4/5 md:w-1/5 m-auto md:m-0 bg-gradient-to-tr from-emerald-500 to-emerald-300 rounded-2xl p-5 gap-4 text-slate-50 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                            <div className="flex items-center gap-4">
                                <GiEmerald className="size-16"/>
                                <div className="flex flex-col justify-around h-16">
                                    <h4 className="text-xl font-semibold">Esmeralda Basic</h4>
                                    <span className="flex w-fit text-xs bg-slate-50 rounded-full text-emerald-400 font-semibold px-2 py-0.5 text-center items-center justify-center">Familiar</span>
                                </div>
                            </div>
                            <div>
                                <ul>
                                    <li className="flex items-center justify-between border-b border-slate-400 py-2"><span className="font-light text-sm flex items-center gap-2"><SlPeople/>Vidas vinculadas</span><span>Até 5</span></li>
                                    <li className="flex items-center justify-between border-b border-slate-400 py-2"><span className="font-light text-sm flex items-center gap-2"><IoMdTime/>Carência</span><span>0 dias</span></li>
                                    <li className="flex items-center justify-between border-b border-slate-400 py-2"><span className="font-light text-sm flex items-center gap-2"><MdOutlineAttachMoney/>Mensalidade</span><span>R$39,99</span></li>
                                </ul>
                            </div>
                            <button className="w-full border-slate-50 border p-2 rounded-lg hover:bg-slate-50 hover:text-emerald-400 transition-all">Tenho Interesse</button>
                        </div>
                        <div className="flex flex-col w-4/5 md:w-1/5 m-auto md:m-0 bg-gradient-to-tr from-cyan-500 to-cyan-300 rounded-2xl p-5 gap-4 text-slate-50 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                            <div className="flex items-center gap-4">
                                <IoDiamond className="size-16"/>
                                <div className="flex flex-col justify-around h-16">
                                    <h4 className="text-xl font-semibold">Diamante Plus</h4>
                                    <span className="flex w-fit text-xs bg-slate-50 rounded-full text-cyan-400 font-semibold px-2 py-0.5 text-center items-center justify-center">Familiar</span>
                                </div>
                            </div>
                            <div>
                                <ul>
                                    <li className="flex items-center justify-between border-b border-slate-400 py-2"><span className="font-light text-sm flex items-center gap-2"><SlPeople/>Vidas vinculadas</span><span>Até 7</span></li>
                                    <li className="flex items-center justify-between border-b border-slate-400 py-2"><span className="font-light text-sm flex items-center gap-2"><IoMdTime/>Carência</span><span>0 dias</span></li>
                                    <li className="flex items-center justify-between border-b border-slate-400 py-2"><span className="font-light text-sm flex items-center gap-2"><MdOutlineAttachMoney/>Mensalidade</span><span>R$59,99</span></li>
                                </ul>
                            </div>
                            <button className="w-full border-slate-50 border p-2 rounded-lg hover:bg-slate-50 hover:text-cyan-400 transition-all">Tenho Interesse</button>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <a href="/saude/planodetails"><button className="text-blue hover:before:bg-redborder-red-500 relative overflow-hidden border border-slate-800 bg-transparent backdrop-blur-sm px-4 py-3 text-slate-800 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-violet-600 hover:border-violet-600 before:transition-all before:duration-500 hover:text-white hover:shadow-white/20 hover:before:left-0 hover:before:w-full m-auto"><span className="relative z-10">Conheça nossos planos</span></button></a>
                    </div>
                </section>
                <section className="bg-slate-100 flex flex-col justify-center py-32 px-4 md:px-0 gap-16">
                    <div className="flex flex-col gap-6 text-center">
                        <p className="text-3xl text-slate-800 font-semibold">O que nossos <span className="text-violet-700">clientes</span> falam</p>
                        <p className="text-slate-600">Confira o que os nossos clientes falam sobre o <span className="text-violet-700">Plano Costa</span> e como transformamos a <span className="text-violet-700">Saúde</span> e <span className="text-violet-700">Segurança</span> de suas famílias.</p>
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
                    <div className="flex flex-col md:flex-row justify-center items-center md:items-baseline md:justify-around gap-12 md:gap-16">
                        <div className="flex flex-col md:w-1/2">
                            <span className="text-lg italic text-slate-600 font-light">Como faço para abrir um plano?</span>
                            <span className="text-slate-800">Você pode contratar um plano online via WhatsApp ou visitando nossa central de atendimentos em Taquari - RS.</span>
                        </div>
                        <div className="flex flex-col md:w-1/2">
                            <span className="text-lg italic text-slate-600 font-light">Quais são as formas de pagamento?</span>
                            <span className="text-slate-800">Aceitamos diversas formas de pagamento, presencialmente no dinheiro e cartão (crédito ou débito), boleto bancário ou via PIX.</span>
                        </div>
                    </div>
                </section>
                <section id="contact" className="bg-slate-100 flex flex-col md:flex-row justify-center items-start px-10 md:px-2 gap-16 md:gap-0 md:justify-evenly py-32">
                    <div className="">
                        <span className="text-2xl font-semibold text-slate-900">Contato</span>
                        <div className="flex flex-col mt-8 gap-4">
                            <span className="flex items-center gap-2 text-lg text-slate-800"><MdPlace className="size-6"/>Rua Sete de Setembro, 2356, Centro, Taquari, RS</span>
                            <span className="flex items-center gap-2 text-lg text-slate-800"><MdLocalPhone className="size-6"/>(51) 99999-9999</span>
                            <span className="flex items-center gap-2 text-lg text-slate-800"><FaWhatsapp className="size-6"/>(51) 99999-9999</span>
                        </div>
                    </div>
                    <div className="">
                        <span className="text-2xl font-semibold text-slate-900">Redes Sociais</span>
                        <div className="flex flex-col mt-8 gap-4">
                            <a href="https://instagram.com/planocosta" className="flex items-center gap-2 text-lg text-slate-800 hover:text-fuchsia-500 transition-all"><FaInstagram className="size-6"/>@planocosta</a>
                            <a href="https://instagram.com/costa.ambulancias" className="flex items-center gap-2 text-lg text-slate-800 hover:text-blue-500 transition-all"><FaFacebookSquare className="size-6"/>Plano Costa</a>
                            <a className="flex items-center gap-2 w-fit text-slate-800 hover:text-emerald-500 transition-all" href=""><FaWhatsapp className="size-6"/><button className="text-blue hover:before:bg-redborder-red-500 relative overflow-hidden border border-slate-500 bg-transparent backdrop-blur-sm px-2 py-1 text-slate-800 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-emerald-500 hover:border-emerald-500 before:transition-all before:duration-500 hover:text-white hover:shadow-emerald-500 hover:before:left-0 hover:before:w-full m-auto"><span className="relative z-10">Iniciar Conversa</span></button></a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}