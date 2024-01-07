import React, { useEffect, useLayoutEffect,useRef } from 'react'
/* 
    In React, the useLayoutEffect hook is similar to the useEffect hook, but it fires synchronously after all DOM mutations. This can be useful when you need to perform measurements or manipulate the DOM and want to ensure that these operations are reflected before the browser paints.

    The basic usage of useLayoutEffect is similar to useEffect. You provide a function as the first argument, and this function will be executed after the component has been rendered:

    * useLayoutEffect rendered just before the  useEffect renders.
*/

const UseLayoutEffect = () => {
    const inputRef = useRef(null);

    useLayoutEffect(()=>{
       
        console.log(inputRef.current.value);
    },[])

    useEffect(()=>{
        inputRef.current.value="Hello"
    },[])

    

  return (
    <div>
        <input  ref={inputRef}  type='text' value="Ajith"style={{width:'200px',height:"50px"}}/>
    </div>
  )
}

export default UseLayoutEffect