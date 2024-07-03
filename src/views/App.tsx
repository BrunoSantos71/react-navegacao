import Content from "../components/Content"
import Menu from "../components/Menu"
import "./App.css"
import { BrowserRouter } from "react-router-dom"
import DataContext, { data, DEFAULT_VALUE } from "../components/data/DataContext"
import { useState } from "react"

function App() {

    const [data, saveData] = useState(DEFAULT_VALUE)

    return (
        <div className="App">
            <DataContext.Provider value={{data, saveData}}>
                <BrowserRouter>
                    <Menu />
                    <Content />
                </BrowserRouter>
            </DataContext.Provider>
        </div>
    )
}

export default App