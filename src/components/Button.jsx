export function Button({title, bg}) {
    if (bg==1) {
        return(
            <button className="bg-slate-50 border-2 border-slate-900 items-center text-center text-slate-900 px-4 p-auto h-12 hover:bg-slate-900 hover:text-slate-50 transition-all">
                {title}
            </button>
        )
    } else if (bg==2) {
        return(
            <button className="bg-slate-900 items-center text-center text-slate-50 px-4 p-auto h-12 hover:bg-slate-50 hover:text-slate-900 border-slate-900 border-2 transition-all">
                {title}
            </button>
        )
    }
}