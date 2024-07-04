import React, { useContext } from 'react'
import PageTitle from './PageTitle'
import DataContext from './data/DataContext'
import SectionTitle from './SectionTitle';

function UseContext(props: any) {

    function setNumber(n: number) {
        context?.saveData({
            ...context.data, number: n + context.data.number
        })
    }

    const context = useContext(DataContext);

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="#Ex 1" />
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

            <SectionTitle title="#Ex 2" />
            <div className="center">
                <span className="text">
                    {context?.data.number}
                </span>
                <span className="text">
                    {context?.data.text}
                </span>

                <div>
                    <button className="btn"
                        onClick={() => context?.saveData({ ...context.data, number: context.data.number - 1 })}> -1
                    </button>
                    <button className="btn"
                        onClick={() => context?.saveData({ ...context.data, number: context.data.number + 1 })}> +1
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
