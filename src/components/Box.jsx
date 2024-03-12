import React from "react"

export default function Box({ height, width, backgroundColor }){
    
    return(
        <div className="boxUnit"
        style={{
            height: `${height}px`,
            width: `${width}px`,
            backgroundColor: backgroundColor
          }}
        >
            
        </div>
    )
}