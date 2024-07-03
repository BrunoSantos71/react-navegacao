import React, { useContext } from 'react'
import PageTitle from './PageTitle'
import DataContext from './data/DataContext'

function UseContext(props: any) {

    const context = useContext(DataContext);

    function setNumber(n: number) {
        context?.saveData({
            ...context.data, number: n + context.data.number
        })
    }

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <div className="center">
                <span className="text">
                    {context?.data.number}
                </span>
                <span className="text">
                    {context?.data.text}
                </span>

                <div>
                    <button className="btn"
                        onClick={() => setNumber(-1)}> -1
                    </button>
                    <button className="btn"
                        onClick={() => setNumber(+1)}> +1
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
