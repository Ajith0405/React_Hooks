import React, { useEffect, useState, useMemo } from 'react'

const Practice = () => {
  const [value,setValue] = useState("");
  const [data,setData] = useState(["Ajith"]);

  const handleInput=(e)=>{
    setValue(e.target.value);
  }
  const handleAdd = () =>{
    setData([...data,value]);
    setValue("")
  }
  useEffect(()=>{
    console.log(data);
  },[data])

  const findLongestName =(getvalues)=>{
    if(!getvalues) return null;

    let longestName = "";
    for(let i=0; i< getvalues.length ; i++){
      let currentName = getvalues[i];
      if(currentName.length > longestName.length){
        longestName = currentName;
      }
    }
    console.log("Function completed..");
    return longestName;
  }
  // useMemo hook
  const getLongestName = useMemo(()=>findLongestName(data), [data]);

  return (
    <div>
      <div style={{padding:"10px"}}>
      Enter Name:
      <input type='text' value={value} onChange={handleInput} />
      <button onClick={handleAdd} >Add Name</button>
      <hr/>
      <h2>Longest Name : {getLongestName}</h2>
      </div>
      <div>
        <h1>Name List in an Array</h1>
        {
          data ? (
            <div>
              <ol>
                {
                  data.map((item,i)=>(
                      <li key={i}>{item}</li>
                  ))
                }
              </ol>
            </div>
          ):null
        }
      </div>

    </div>
  )
}

export default Practice