import React, { useRef } from 'react'
import ChildComp from './ChildComp'

/* 
    In React, the useImperativeHandle hook is used to customize the instance value that is exposed when using React.forwardRef. It allows you to expose specific functions or values from a child component to its parent component when using a forward ref.

    *update state of child from parent click button
    *alterToggle() function of child.
*/

const ParentComp = () => {
    const buttonRef = useRef(null);

  return (
    <div>
        <button onClick={()=>{
            buttonRef.current.alterToggle();
        }} >Button from parent</button>
        <div>
            <ChildComp ref={buttonRef} />
        </div>
    </div>
  )
}

export default ParentComp