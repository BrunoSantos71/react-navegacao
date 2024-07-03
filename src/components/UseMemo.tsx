import React, { useEffect, useMemo, useState } from 'react'
import PageTitle from './PageTitle'

interface Memo {
    n1: number,
    n2: number,
    n3: number
}

function sum(a: number, b: number) {
    let futuro = Date.now() + 1000

    while (Date.now() < futuro) { }

    return a + b
}


function UseMemo(props: any) {

    const [memo, setNumber] = useState<Memo>({
        n1: 1,
        n2: 1,
        n3: 1
    });

    const result = useMemo(() => sum(memo.n1, memo.n2), [memo.n1, memo.n2])

    // useEffect(function () {
    //     setResult(sum(memo.n1, memo.n2))
    // }, [memo.n1, memo.n2])

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />

            <div className="center">
                <input type="number" className="input"
                    value={memo.n1}
                    onChange={e => setNumber({ ...memo, n1: Number(e.target.value) })}
                />
                <input type="number" className="input"
                    value={memo.n2}
                    onChange={e => setNumber({ ...memo, n2: Number(e.target.value) })}
                />
                <input type="number" className="input"
                    value={memo.n3}
                    onChange={e => setNumber({ ...memo, n3: Number(e.target.value) })}
                />
                <span className="text">{result}</span>
            </div>
        </div>
    )
}

export default UseMemo
