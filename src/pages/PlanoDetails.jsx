import { IoIosCheckmarkCircleOutline, IoIosCloseCircleOutline, IoIosArrowRoundBack } from "react-icons/io";


export function PlanoDetails() {

    const check = <IoIosCheckmarkCircleOutline className="text-emerald-600" />
    const close = <IoIosCloseCircleOutline className="text-red-400"/>

    return (
        <>
            <div className="w-screen px-8 md:px-16 flex flex-col gap-16 mt-40 w-fit m-auto">
                <a href="/plano" className="flex w-fit items-center gap-2 ml-6 md:ml-12">
                    <IoIosArrowRoundBack />
                    <span>Voltar</span>
                </a>
                <div className="text-center w-full">
                    <h1 className="text-4xl font-semibold text-slate-800 mb-4">Conheça nossos benefícios</h1>
                    <p className="text-lg text-slate-600">Escolha o plano ideal para você e sua família</p>
                </div>
                <table className="text-center">
                    <tr className="text-wrap text-center">
                        <th></th>
                        <th>Plano Individual Topázio Economic</th>
                        <th>Plano Familiar Esmeralda Basic</th>
                        <th>Plano Familiar Diamante Plus</th>
                    </tr>
                    <tr>
                        <td>Ambulância gratuita em caso de emergência</td>
                        <td>{close}</td>
                        <td>{check}</td>
                        <td>{check}</td>
                    </tr>
                    <tr>
                        <td>Ambulância gratuita em caso de emergência</td>
                        <td>{close}</td>
                        <td>{check}</td>
                        <td>{check}</td>
                    </tr>
                    <tr>
                        <td>Ambulância gratuita em caso de emergência</td>
                        <td>{close}</td>
                        <td>{check}</td>
                        <td>{check}</td>
                    </tr>
                </table>
            </div>
        </>
    )
}