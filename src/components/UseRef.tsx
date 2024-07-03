import React, { useState, useRef, useEffect } from 'react'
import PageTitle from './PageTitle'
import SectionTitle from './SectionTitle'

interface Ref {
    value: string
}

function UseRef(props: any) {
    const [value1, setValue1] = useState<Ref>({
        value: "1",
    });

    const count = useRef(0);

    ///
    const [value2, setValue2] = useState<Ref>({
        value: "1",
    });

    const input1 = useRef<HTMLInputElement>(null);
    const input2 = useRef<HTMLInputElement>(null);
    //const input1 = useRef(null)
    // const input2 = useRef(null)

    useEffect(function () {
        count.current++;
        if (input2.current != null)
            input2.current.focus()
    }, [value1.value])

    useEffect(function () {
        count.current++;
        if (input1.current != null)
            input1.current.focus()
    }, [value2.value])


    function merge(s1: string, s2: string) {
        let max = (s1.length > s2.length) ? s1.length : s2.length

        let valorfinal: string = ""

        for (let i = 0; i < max; i++) {
            valorfinal += s1[i] == undefined ? "" : s1[i];
            valorfinal += s2[i] == undefined ? "" : s2[i];
        }

        return valorfinal
    }

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="#Ex 01" />
            <div className="center">
                <div>
                    <span className="text">
                        Valor:
                    </span>
                    <span className="text">
                        {merge(value1.value, value2.value)}[
                    </span>
                    <span className="text red">
                        {count.current}
                    </span>
                    <span className="text">]</span>
                </div>

                <input type="text" className="input"
                    value={value1.value}
                    onChange={e => setValue1({ ...value1, value: e.target.value })}
                    ref={input1}
                />
            </div>
            <SectionTitle title="#Ex 02" />
            <div className="center">
                <input type="text" className="input"
                    value={value2.value}
                    onChange={e => setValue2({ ...value2, value: e.target.value })}
                    ref={input2}
                />

            </div>
        </div>
    )
}

export default UseRef
