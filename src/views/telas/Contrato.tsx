import { useParams } from "react-router-dom"

function Contrato() {
    const { id } = useParams()

    return (
        <div className="Contrato">
            <h1>Contratos</h1>
            <p>Valor : {id}</p>
        </div>
    )
}

export default Contrato