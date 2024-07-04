import Content from "../components/Content"
import Menu from "../components/Menu"
import "./App.css"
import { BrowserRouter } from "react-router-dom"
import Storage from "../components/data/Storage"

function App() {



    return (
        <div className="App">
            <Storage>
                <BrowserRouter>
                    <Menu />
                    <Content />
                </BrowserRouter>
            </Storage>

        </div>
    )
}

export default App