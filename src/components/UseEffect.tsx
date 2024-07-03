import React, { useEffect, useState } from 'react'
import PageTitle from './PageTitle'
import SectionTitle from './SectionTitle'

interface Numeros {
    numero: number
    fatorial: number
    mod: string
}

interface Fatorial {
    numero: number
}

function calcFatorial(n: number): number {
    if (n < 0)
        return -1
    if (n === 0)
        return 1
    return calcFatorial(n - 1) * n
}

function UseEffect(props: any) {
    const [numeros, setNumeros] = useState<Numeros>({
        numero: 0,
        fatorial: 0,
        mod: ""
    })

    useEffect(function () {
        setNumeros({
            ...numeros,
            fatorial: calcFatorial(numeros.numero),
        })
    }, [numeros.numero])

    useEffect(function () {
        setNumeros({
            ...numeros,
            mod: numeros.numero % 2 == 0 ? "Par" : "Impar"
        })
    }, [numeros.numero])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="#Ex 01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text">{numeros.fatorial}</span>
                </div>

                <input type="number" className="input"
                    value={numeros.numero}
                    onChange={e => setNumeros({ ...numeros, numero: Number(e.target.value) })}
                />
            </div>
            <SectionTitle title="#Ex 02" />
            <div className="center">
                <span className="text">Status: {numeros.mod}</span>
            </div>
        </div>
    )
}

export default UseEffect
