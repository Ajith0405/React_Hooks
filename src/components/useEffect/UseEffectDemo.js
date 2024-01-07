import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GetLsData from '../../DataFromLs/GetLsData';

/*
    In React, the useEffect hook is a function that allows you to perform side effects in functional components. Side effects can include data fetching, subscriptions, manually changing the DOM, and other operations that may need to be performed after the component has been rendered or when certain dependencies change.
    
    * Renders initailization of component.
    * Reders every state change detections cycle. resolve this put an empty array useEffect sencond value.

 */

const UseEffectDemo = () => {

    // Directly data set
    const [data,setData] = useState(null);

    

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then((res)=>{
            setData(res.data);  
            localStorage.setItem("getData",JSON.stringify(res.data));
        })
    },[])

  return (
    <div>
        
        {
            data ? (
                <div>
                    {
                        data.map((item)=>(
                            <div key={item.id}>
                            <p>{item.email}</p>
                            <h2>{item.name}</h2>
                            </div>
                        ))
                    }
                </div>
            ):null
        }
        <div>
            <h1>Data from Local Storage</h1>
            <GetLsData/>
        </div>
    </div>
  )
}

export default UseEffectDemo