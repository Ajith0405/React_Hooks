import React, { useEffect, useState, useMemo } from 'react'
import axios from 'axios'

/*
    In React, the useMemo hook is a performance optimization tool that memoizes the result of a function, preventing unnecessary recalculations and rendering when the dependencies of that function have not changed. It is particularly useful when dealing with computationally expensive calculations or when working with components that re-render frequently.
 */

const WithUseMemoHook = () => {
    const [data,setData] = useState(null);
    const[toogle,setToggle] = useState(false);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then((res)=>{
            setData(res.data);
        })
    },[])

    const findLargestName =(comments)=>{
        if(!comments) return null

        let longestName = "";
        for(let i=0; i < comments.length ; i++){
            let currentName = comments[i].name;
            if(currentName.length > longestName.length){
                longestName = currentName;
            }
        }

        console.log("This computation completed");

        return longestName;
    }

    const getLongestName = useMemo(()=> findLargestName(data), [data]);

  return (
    <div>
        <h2>{getLongestName}</h2>
        <button onClick={()=>{setToggle(!toogle)}} >Toggle</button>
        {toogle && <h3>Toggle is on</h3>}
    </div>
  )
}

export default WithUseMemoHook