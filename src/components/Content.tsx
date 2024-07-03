import "./layout/content.css"
import About from "../views/telas/About"
import Home
    from "../views/telas/Home"
import { Routes, Route } from "react-router-dom"
import Contrato from "../views/telas/Contrato"
import NotFound from "../views/telas/NotFound"
import MegaApp from "../views/telas/MegaApp"
import Calculadora from "../views/telas/Calculadora"

import UseState from "./UseState"
import UseEffect from "./UseEffect"
import UseRef from "./UseRef"
import UseCallback from "./UseCallback"
import UseMemo from "./UseMemo"
import UseContext from "./UseContext"
import UseReducer from "./UseReducer"
import UseCustom from "./UseCustom"

function Content() {

    return (
        <div className="Content">

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contrato/:id" element={<Contrato />} />
                <Route path="/contrato/:id" element={<Contrato />} />
                <Route path="/megaApp" element={<MegaApp />} />
                <Route path="/Calculadora" element={<Calculadora />} />

                <Route path="/useState" element={<UseState n={1} />} />

                <Route path="/useEffect" element={<UseEffect />} />

                <Route path="/useRef" element={<UseRef />} />

                <Route path="/useMemo" element={<UseMemo />} />

                <Route path="/useCallback" element={<UseCallback />} />

                <Route path="/useContext" element={<UseContext />} />

                <Route path="/useReducer" element={<UseReducer />} />

                <Route path="/useCustom" element={<UseCustom />} />

                <Route path="*" element={<NotFound />} />

            </Routes>
        </div>
    )
}

export default Content