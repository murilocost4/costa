

export function Header({children}) {

    return (
        <header className="hidden md:flex justify-between px-16 py-4 items-center bg-white w-full border-b shadow-2xl">
            <div>
                {children}
            </div>
            <nav className="flex gap-6 items-center text-slate-800 ">

            <div class="group relative cursor-pointer py-2">

            <div class="flex items-center">
                <a class="menu-hover text-base font-normal lg:mx-3" onClick="">
                    Saúde
                </a>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="h-4 w-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </span>
            </div>

                <div class="invisible absolute z-50 flex w-fit text-left flex-col bg-slate-50 py-1 pt-6 shadow-xl text-slate-700 group-hover:visible">

                    <a href="/saude/plano" class="my-2 block border-b border-gray-100 py-1 font-normal hover:text-slate-500 md:mx-2">
                        Plano Costa
                    </a>

                    <a href="/saude/centroclinico" class="my-2 block border-b border-gray-100 py-1 font-normal hover:text-slate-500 md:mx-2">
                        Centro Clínico
                    </a>

                    <a href="/saude/ambulancias" class="my-2 block border-b border-gray-100 py-1 font-normal hover:text-slate-500 md:mx-2">
                        Costa Ambulâncias
                    </a>

                </div>
            </div>

                <a href="#contact" className="hover:text-slate-500">Emergência</a>
                <a href="#info" className="hover:text-slate-500">Saiba mais</a>
                <a href="#contact" className="hover:text-slate-500">Contato</a>
            </nav>
        </header>
    )
}