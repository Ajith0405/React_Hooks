import React, { useEffect, useState } from 'react'

const GetLsData = () => {
    // Data set from local storage
    const [lsData,setLsData] = useState(null);

   useEffect(()=>{
    const getItems = localStorage.getItem("getData");
   const parseGetItems = JSON.parse(getItems);
   setLsData(parseGetItems);
   },[]) 
   

  return (
    <div>
        {
            lsData ? (
                <div>
                    {
                        lsData.map((items)=>(
                            <div key={items.id} style={{border:"1px solid red"}}>
                                <h2>{items.name}</h2>
                                <p>{items.email}</p>
                            </div>
                        ))
                    }
                </div>
            ):null
        }
    </div>
  )
}

export default GetLsData