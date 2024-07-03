import React from "react"

function UseCallbackButons(props: any) {

    console.log('callback')
    return (
        <div>
        <button className="btn"
            onClick={() => props.inc(6)}>
            +6
        </button>
        <button className="btn"
            onClick={() => props.inc(12)}>
            +12
        </button>
        <button className="btn"
            onClick={() => props.inc(18)}>
            +18
        </button>
    </div>
    )
}

export default React.memo(UseCallbackButons)