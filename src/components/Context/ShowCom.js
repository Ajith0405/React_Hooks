import React,{useContext} from 'react'
import { AppContext } from './ContectDemo'

const ShowCom = () => {
    const {inputvalues} = useContext(AppContext);
  return (
    <div>
        <h1>User : {inputvalues}</h1>
    </div>
  )
}

export default ShowCom