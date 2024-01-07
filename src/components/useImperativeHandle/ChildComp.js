import React, { forwardRef, useImperativeHandle, useState } from 'react'

// carfully note each brackets open and close.

const ChildComp = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref, () => ({
        alterToggle() {
            setToggle(!toggle);
        }
    }))
    return (
        <div>
        <button>Button from child</button>
        {toggle && <h3>Show Text action from parent click </h3>}
        </div>
    )
});

export default ChildComp