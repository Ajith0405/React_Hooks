import React, { useRef } from 'react'
/*
    In React, the useRef hook is used to create a mutable object that can persist across renders. Unlike the useState hook, changing the value of a ref does not cause a re-render. It is commonly used to interact with the DOM or to persist values between renders without triggering re-renders.
 */


const UseRefDemo = () => {

    const inputRef = useRef(null);

    const handleClick=()=>{
        console.log(inputRef.current.value);
        inputRef.current.value="";
        inputRef.current.focus();
    }


  return (
    <div>
        <input type='text' placeholder='Ex..' ref={inputRef} />
        <button onClick={handleClick} >Click Here</button>
    </div>
  )
}

export default UseRefDemo