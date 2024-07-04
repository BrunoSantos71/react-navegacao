import React, { useContext, useState } from "react"
import DataContext, { DEFAULT_VALUE, data } from './DataContext'

function Storage(props: any) {

    const context = useContext(DataContext);

    const [data, saveData] = useState(DEFAULT_VALUE)


    function updateData(key: number, value: data) {
        context?.saveData({
            ...data, [key]: value
        })
    }


    return (
        <>
            <DataContext.Provider value={{ data, saveData, updateData }}>
                {props.children}
            </DataContext.Provider>
        </>
    )
}

export default Storage