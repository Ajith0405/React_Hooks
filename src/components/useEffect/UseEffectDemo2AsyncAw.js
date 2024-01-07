import React, { useEffect, useState } from 'react'

const UseEffectDemo2AsyncAw = () => {

    const [data,setData] = useState(null);

    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const result = await response.json();
            console.log(data);
            setData(result);
        }
        fetchData();
    },[])

  return (
    <div>
        {
            data?(
                <div>
                    {
                        data.map((user)=>(
                            <div key={user.id}>
                            <h1>{user.name}</h1>
                            </div>
                        ))
                    }
                </div>
            ):(
                <div>
                    <h1>Loading....</h1>
                </div>
            )
        }
    </div>
  )
}

export default UseEffectDemo2AsyncAw