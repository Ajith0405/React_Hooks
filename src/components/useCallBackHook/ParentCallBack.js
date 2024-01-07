import React, { useCallback, useState } from 'react'
import ChildCallBack from './ChildCallBack';

/*
    * without callback book the parent function renders every toggle state change. 
*/

const ParentCallBack = () => {
    const [toggle,setToggle] = useState(false);
    const [data,setData] = useState("Ajith Shanmugam");


    // with useCallback hook 
    // const returnComment = useCallback((name)=>{
    //     return data + name;
    // },[data])

    //without useCallback hook
    const returnComment = (name)=>{
        return data + name;
    }
  return (
    <div>
        <ChildCallBack rtncmt = {returnComment} />
        <button onClick={()=>{setToggle(!toggle)}} >Toggle</button>
        {toggle && <p>Toggle is on</p>}
    </div>
  )
}

export default ParentCallBack