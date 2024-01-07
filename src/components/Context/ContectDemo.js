import React ,{createContext, useState} from 'react'
import InputComp from './InputComp'
import ShowCom from './ShowCom'

export const AppContext = createContext(null);

const ContectDemo = () => {
    const [inputvalues,setInputValues] = useState("");
    
  return (
    <AppContext.Provider value={{inputvalues,setInputValues}} >
        <InputComp/>
        <ShowCom/>
    </AppContext.Provider>
  )
}

export default ContectDemo