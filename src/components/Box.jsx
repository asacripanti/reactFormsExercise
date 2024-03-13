import React from "react"

export default function Box({ height, width, backgroundColor, removeBox }){
    const boxStyle = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: backgroundColor
    }
    return(

        <div className="boxUnit" style={boxStyle}>
            <button className="deleteButton" onClick={removeBox}>X</button>
        </div>
    )
}