import React from "react"

export default function NewBoxForm({ createBox }){
    const [formData, setFormData] = React.useState({
        width: "",
        height: "",
        backgroundColor: ""
    })

    function handleChange(event){
        const {name, value, type} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        // console.log(formData)
        createBox(formData)
        setFormData({ height: "", width: "", backgroundColor: "" });
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Width"
                className="formWidth"
                name="width"
                value={formData.width}
                onChange={handleChange}
                
            
            />
                 <input
                type="text"
                placeholder="Height"
                className="formHeight"
                name="height"
                value={formData.height}
                onChange={handleChange}
                
            
            />
                 <select
                className="formBackgroundColor"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>    



            <button>Submit</button>
        </form>
    )
}