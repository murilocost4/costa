import { Header } from "../../components/saude/Header"
import React from 'react'

export function CentroClinico() {
    
    return(
        <>
        <Header />
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