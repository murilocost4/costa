import { Button } from "../components/Button";

export function Plano() {
    return (
        <>
        <header className="w-full flex justify-between items-center px-24 h-20 border-b-2">
            <img src="" alt="Logo da Empresa" />
            <nav className="flex gap-10">
                <a href="">Planos Assistenciais</a>
                <a href="">Contato</a>
                <a href="">FAQs</a>
            </nav>
        </header>
        <main className="flex-col">
            <section className="grid-flow-col gap-16 items-center text-center md:text-left md:pl-16 mt-32 md:m-16 md:border-2 md:flex">
                <div className="flex-col px-6 md:p-0 md:w-1/2">
                    <h1 className="text-slate-900 font-bold text-5xl md:text-6xl mb-10 md:mb-6">Cuidando da sua saúde com excelência</h1>
                    <p className="text-slate-600 font-normal text-sm md:text-md mb-10 md:mb-6">Oferecemos planos assistenciais com uma ampla rede conveniada para atender suas necessidades de saúde. Nosso suporte ao cliente está sempre disponível para garantir a melhor experiência.</p>
                    <div className="flex gap-6 w-fit mx-auto md:mx-0">
                        <a href=""><Button title="Saiba Mais" bg={1}/></a>
                        <a href=""><Button title="Contato" bg={2}/></a>
                    </div>
                </div>
                <div className="mt-10 md:mt-0 md:w-3/5">
                    <img src="/assets/family.jpg" alt="" />
                </div>
            </section>
            <section className="flex-col mt-48 ">
                <div className="flex-col text-center md:w-1/2 mx-auto px-6 mb-20 md:px-0">
                    <span className="text-lg text-slate-900">Saúde</span>
                    <p className="text-4xl md:text-4xl font-bold mt-2 mb-8">Nossos planos assistenciais para você e sua família</p>
                    <span>Oferecemos uma variedade de planos de saúde adaptados às suas necessidades. Descubra como podemos cuidar da sua saúde com qualidade e confiança.</span>
                </div>
                <div className="grid-flow-row w-fit justify-center md:flex gap-32">
                    <div className="flex-col justify-center text-center w-1/4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24 " className="mx-auto mb-6">
                            <g fill="none" stroke="#64748b" stroke-width="1.5">
                                <path d="M10.55 2.876L4.595 6.182a2.98 2.98 0 0 0-1.529 2.611v6.414a2.98 2.98 0 0 0 1.529 2.61l5.957 3.307a2.98 2.98 0 0 0 2.898 0l5.957-3.306a2.98 2.98 0 0 0 1.529-2.611V8.793a2.98 2.98 0 0 0-1.529-2.61L13.45 2.876a2.98 2.98 0 0 0-2.898 0Z" />
                                <path d="M20.33 6.996L12 12L3.67 6.996M12 21.49V12" />
                            </g>
                        </svg>
                        <p className="text-3xl font-bold text-slate-900 mb-6">Plano Individual Topazio Economic</p>
                        <p className="text-light text-slate-700">Breve descrição sobre o plano</p>
                    </div>
                    <div className="flex-col justify-center text-center w-1/4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24 " className="mx-auto mb-6">
                            <g fill="none" stroke="#64748b" stroke-width="1.5">
                                <path d="M10.55 2.876L4.595 6.182a2.98 2.98 0 0 0-1.529 2.611v6.414a2.98 2.98 0 0 0 1.529 2.61l5.957 3.307a2.98 2.98 0 0 0 2.898 0l5.957-3.306a2.98 2.98 0 0 0 1.529-2.611V8.793a2.98 2.98 0 0 0-1.529-2.61L13.45 2.876a2.98 2.98 0 0 0-2.898 0Z" />
                                <path d="M20.33 6.996L12 12L3.67 6.996M12 21.49V12" />
                            </g>
                        </svg>
                        <p className="text-3xl font-bold text-slate-900 mb-6">Plano Individual Topazio Economic</p>
                        <p className="text-light text-slate-700">Breve descrição sobre o plano</p>
                    </div>
                    <div className="flex-col justify-center text-center w-1/4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24 " className="mx-auto mb-6">
                            <g fill="none" stroke="#64748b" stroke-width="1.5">
                                <path d="M10.55 2.876L4.595 6.182a2.98 2.98 0 0 0-1.529 2.611v6.414a2.98 2.98 0 0 0 1.529 2.61l5.957 3.307a2.98 2.98 0 0 0 2.898 0l5.957-3.306a2.98 2.98 0 0 0 1.529-2.611V8.793a2.98 2.98 0 0 0-1.529-2.61L13.45 2.876a2.98 2.98 0 0 0-2.898 0Z" />
                                <path d="M20.33 6.996L12 12L3.67 6.996M12 21.49V12" />
                            </g>
                        </svg>
                        <p className="text-3xl font-bold text-slate-900 mb-6">Plano Individual Topazio Economic</p>
                        <p className="text-light text-slate-700">Breve descrição sobre o plano</p>
                    </div>
                </div>
                <div className="w-fit mx-auto mt-14">
                    <a href=""><Button title="Mais informações" bg={1}/></a>
                </div>
            </section>
            <section>
                {/* Depoimentos */}
            </section>
            <section>
                <span>Contato</span>
                <div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
                            <path fill="#64748b" d="M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3"></path>
                            <path fill="#64748b" d="m16 30l-8.436-9.949a35 35 0 0 1-.348-.451A10.9 10.9 0 0 1 5 13a11 11 0 0 1 22 0a10.9 10.9 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.813 18.395s.233.308.286.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.9 8.9 0 0 0 25 13a9 9 0 1 0-18 0a8.9 8.9 0 0 0 1.813 5.395"></path>
                        </svg>
                        <span>Endereço</span>
                        <span>Rua Marechal Deodoro, 2356, Centro, Taquari, RS</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                            <path fill="#64748b" d="m221.59 160.3l-47.24-21.17a14 14 0 0 0-13.28 1.22a5 5 0 0 0-.56.42l-24.69 21a1.88 1.88 0 0 1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.91 1.91 0 0 1 0-1.68l21.07-25a6 6 0 0 0 .42-.58a14 14 0 0 0 1.12-13.27L95.73 34.49a14 14 0 0 0-14.56-8.38A54.24 54.24 0 0 0 34 80c0 78.3 63.7 142 142 142a54.25 54.25 0 0 0 53.89-47.17a14 14 0 0 0-8.3-14.53M176 210c-71.68 0-130-58.32-130-130a42.23 42.23 0 0 1 36.67-42h.23a2 2 0 0 1 1.84 1.31l21.1 47.11a2 2 0 0 1 0 1.67l-21.11 25.06a5 5 0 0 0-.43.57a14 14 0 0 0-.91 13.73c8.87 18.16 27.17 36.32 45.53 45.19a14 14 0 0 0 13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92 1.92 0 0 1 1.6-.1l47.25 21.17a2 2 0 0 1 1.21 2A42.24 42.24 0 0 1 176 210"></path>
                        </svg>
                        <span>Ligue</span>
                        <span>+55 (54)2129-4040</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="#64748b" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"></path>
                        </svg>
                        <span>Whatsapp</span>
                        <span>+55 (54)2129-4040</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <g fill="none" stroke="#64748b" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="#64748b">
                                <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></path>
                                <path d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m1.008-5.5h-.01"></path>
                            </g>
                        </svg>
                        <span>Instagram</span>
                        <span>@planocosta</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="none" stroke="#64748b" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                        <span>Facebook</span>
                        <span>Plano Costa</span>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}