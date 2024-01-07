import React,{useContext} from 'react'
import { AppContext } from './ContectDemo'

const InputComp = () => {
    const {setInputValues} = useContext(AppContext);
  return (
    <div>
        <div>
            <input type='text' placeholder='EX....' onChange={(e)=>{
                setInputValues(e.target.value);
            }} />
        </div>
    </div>
  )
}

export default InputComp