import React, { useEffect } from 'react'

const ChildCallBack = ({rtncmt}) => {

    useEffect(()=>{
        console.log("Function was called from parent");
    },[rtncmt])

  return (
    <div>
        <h3>{rtncmt(" Kammavam pettai")}</h3>
    </div>
  )
}

export default ChildCallBack