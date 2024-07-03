import React, { useCallback, useState } from 'react'
import PageTitle from './PageTitle'
import SectionTitle from './SectionTitle'
import UseCallbackButons from './UseCallbackButtons'

const UseCallback = (props: any) => {

    const [count, setCount] = useState(0)

    const inc = useCallback(function inc(delta: number) {
        setCount(curr =>  curr + delta);
    }, [setCount])


    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <SectionTitle title="#Ex 1" />

            <div className="center">
                <span className="text">
                    {count}
                </span>
                <UseCallbackButons inc={inc} />
            </div>
        </div>
    )
}

export default UseCallback
