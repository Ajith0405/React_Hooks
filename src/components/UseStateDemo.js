import React, { useState } from 'react'

const UseStateDemo = () => {

    // Example 1 -counter
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 1);
    }
    // Example 2 - input handle 
    const [inputvalue, setInputValue] = useState("Ajith");
    const inputChanges = (event) => {
        let newValue = event.target.value;
        setInputValue(newValue)
    }
    // Example 3 - Array of input
    const [values, setValues] = useState("");
    const [arrayValues, setArrayVales] = useState(["Hi"])

    const inputValues = (event) => {
        let newValues = event.target.value;
        setValues(newValues);
    }

    const addToArray = () => {
        setArrayVales([...arrayValues, values]);
        setValues("");
    }

    // Example 4 - Object of inputs
    const [arrayObjectInputs, setArrayObjectInputs] = useState([])
    const [objectInputs, setObjectInputs] = useState(
        {
            name: "",
            email: "",
            city: ""
        }
    )

    const handleObjectInput = (event) => {
        setObjectInputs({ ...objectInputs, [event.target.name]: event.target.value })

    }

    const onSubmitInput = (e) => {
        e.preventDefault();
        // console.log(objectInputs);
        setArrayObjectInputs([...arrayObjectInputs, objectInputs])
        setObjectInputs({
            name: "",
            email: "",
            city: ""
        })

    }

    return (
        <div>
            {/* Example 1 counter */}
            <div style={{ border: "1px solid black", padding: "5px" }}>
                <h1>Example 1 - counter </h1>
                <h2>{counter}</h2>
                <button onClick={increment} >Increment</button>
            </div>

            {/* Example 2 Input Handle */}
            <div style={{ border: "1px solid black", padding: "5px" }}>
                <h1>Example 2 - Input Handle</h1>
                <input type='text' placeholder='type something...' onChange={inputChanges} />
                <p>{inputvalue}</p>
            </div>

            {/* Example 2 Array of input */}
            <div style={{ border: "1px solid black", padding: "5px" }}>
                <h1>Example 3 - Array of input</h1>
                <input type='text' value={values} placeholder='type something...' onChange={inputValues} />
                <button type='button' onClick={addToArray} >Add</button>
                {
                    arrayValues.length > 0 ?
                        (<ul>

                            {arrayValues.map((item) => (
                                <li>{item}</li>
                            ))}

                        </ul>
                        ) : null
                }
            </div>

            {/* Example 4  Object of inputs */}
            <div style={{ border: "1px solid black", padding: "5px" }}>
                <h1>Example 4 - Object of inputs</h1>
                <div>
                    <form onSubmit={onSubmitInput}>
                        <label htmlFor='name'>Name : </label>
                        <input type='text' placeholder='Enter Name' value={objectInputs.name} name='name' onChange={handleObjectInput} /> <br />
                        <label htmlFor='email'>Email : </label>
                        <input type='email' placeholder='Enter Email' value={objectInputs.email} name='email' onChange={handleObjectInput} /> <br />
                        <label htmlFor='city'>City : </label>
                        <input type='text' placeholder='Enter City' value={objectInputs.city} name='city' onChange={handleObjectInput} />
                        <br />
                        <button type='submit' >Submit</button>
                    </form>
                </div>
                <div>
                    {
                        arrayObjectInputs.length > 0 ? (
                            <div>
                                <table style={{border:'1px solid black',padding:'5px'}}>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>City</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {arrayObjectInputs.map((item) => (
                                            <tr>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.city}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : null
                    }
                </div>
            </div>

        </div>
    )
}

export default UseStateDemo