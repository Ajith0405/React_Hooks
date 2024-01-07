import React, { useEffect, useState } from 'react'
import axios from 'axios'
const FindLongestNameDemo = () => {

    const [data,setData] = useState(null);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then((res)=>{
            // console.log(res.data);
            setData(res.data);
        })
    },[])

    const findLongestName = (comments) =>{
        if(!comments) return null;
        let longestName = "";
        for(let i=0; i< comments.length; i++){
            let currentName = comments[i].name;
            if(currentName.length > longestName.length){
                longestName = currentName;
            }
        }
        console.log("Function completed");
        return longestName;
    }

  return (
    <div>
        <h2>Largerst Name : {findLongestName(data)}</h2>

    </div>
  )
}

export default FindLongestNameDemo