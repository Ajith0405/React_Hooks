import React, { useEffect, useState } from 'react'
import axios from 'axios'

/*
    *Here the computation happens every change detection cycle eg: toggle state change..
 */

const WithoutUseMemo = () => {
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


  return (
    <div>
        <h2>{findLargestName(data)}</h2>
        <button onClick={()=>{setToggle(!toogle)}} >Toggle</button>
        {toogle && <h3>Toggle is on</h3>}
    </div>
  )
}

export default WithoutUseMemo