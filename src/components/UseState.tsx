import React, { useState } from 'react'
import PageTitle from './PageTitle'
import SectionTitle from './SectionTitle'

export interface contador {
    count: number
}
export interface nome {
    nome: string
}

export interface propsUseState {
    n: number
}

function UseState(props: propsUseState) {
    const [contador, setCount] = useState<contador>({
        count: props.n,
    })
    const [nome, setName] = useState<nome>({
        nome: "Inicial",
    })

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais! o hook mais utilizado" />
            <SectionTitle title="#Ex 01" />
            <div className="center">
                <span className="text">{contador.count}</span>

                <button className="btn" onClick={() => setCount({ count: contador.count + 1 })}>
                    +1
                </button>
                <button className="btn" onClick={() => setCount({ count: contador.count - 1 })}>
                    -1
                </button>
            </div>
            <SectionTitle title="#Ex 02" />
            <div>
                <input type="text" className="input" value={nome.nome}
                    onChange={e => setName({ nome: e.target.value })} />

                <span className="text">
                    {nome.nome}
                </span>
            </div>
        </div>
    )
}

export default UseState
