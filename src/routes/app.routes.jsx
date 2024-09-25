import { Route, Routes } from "react-router-dom";

import {App} from '../pages/App'
import { Saude } from "../pages/Saude";
import { Luto } from "../pages/Luto";
import { Plano } from "../pages/Plano";
import { PlanoDetails } from "../pages/PlanoDetails";
import {NotFound} from '../pages/NotFound'

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/saude" element={<Saude/>} />
            <Route path="/luto" element={<Luto/>} />
            <Route path="/plano" element={<Plano/>} />
            <Route path="/planodetails" element={<PlanoDetails/>} />

            <Route path="*" exact={true} element={<NotFound />} />
        </Routes>
    )
}