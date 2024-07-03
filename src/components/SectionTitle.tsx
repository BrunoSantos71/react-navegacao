import './layout/SectionTitle.css'
import React from 'react'


function SectionTitle(props: any) {
    return (
        <div className="SectionTitle">
            <h3>{props.title}</h3>
        </div>
    )
}


export default SectionTitle