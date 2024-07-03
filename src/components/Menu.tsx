import "./layout/menu.css"
import { Link } from "react-router-dom"

function Menu() {

    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contrato/1">Contrato #1</Link>
                    </li>
                    <li>
                        <Link to="/contrato/2">Contrato #2</Link>
                    </li>
                    <li>
                        <Link to="/megaApp">Mega Sena App</Link>
                    </li>
                    <li>
                        <Link to="/calculadora">Calculadora</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/useState">useState()</Link>
                    </li>
                    <li>
                        <Link to="/useEffect">useEffect()</Link>
                    </li>
                    <li>
                        <Link to="/useRef">useRef()</Link>
                    </li>
                    <li>
                        <Link to="/useMemo">useMemo()</Link>
                    </li>
                    <li>
                        <Link to="/useCallback">useCallback()</Link>
                    </li>
                    <li>
                        <Link to="/useContext">useContext()</Link>
                    </li>
                    <li>
                        <Link to="/useReducer">useReducer()</Link>
                    </li>
                    <li>
                        <Link to="/useCustom">useMyHook()</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Menu