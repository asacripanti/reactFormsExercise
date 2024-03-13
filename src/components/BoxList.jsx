import React from "react"
import NewBoxForm from "./NewBoxForm"   
import Box from "./Box"

export default function BoxList(){
    const [boxes, setBoxes] = React.useState([])
    const createBox = (formData)=> {
        console.log("Create box with", formData);

        const newBox = {
            height: formData.height,
            width: formData.width,
            backgroundColor: formData.backgroundColor
        }
        setBoxes(prevBoxes => [...prevBoxes, newBox]);   
    }
    const removeBox = (index) => {
        setBoxes(prevBoxes => prevBoxes.filter((box, i) => i !== index));
    };
    return(
        <div>
            {boxes.map(
                (box, index) => (
                    <Box 
                        key={index}
                        height={box.height}
                        width={box.width}
                        backgroundColor={box.backgroundColor}
                        removeBox={() => removeBox(index)}
                    />
                )
            )}
            <NewBoxForm createBox={createBox}/>


        </div>
    )
}