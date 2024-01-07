import React, { useReducer } from 'react'
/* useReducer is a React Hook that provides an alternative to the more common useState Hook when managing state in functional components. While useState is typically used for simple state updates,
useReducer is especially helpful when you have complex state logic or when the next state depends on the previous state. 
    * control multi state.
*/

const reducer =(state, action)=>{
    switch(action.type){
        case "INCREMENT":
            return {count: state.count +1, showText: state.showText};
        case "toggleShowText":
            return {count: state.count, showText: !state.showText};
        default:
            return state;
    }
}

const UseReducerDemo = () => {

    const [state,dispatch] = useReducer(reducer,{count:0,showText:true});

  return (
    <div>
        <h2>{state.count}</h2>
        <button onClick={()=>{
            dispatch({type:"INCREMENT"});
            dispatch({type:"toggleShowText"});
        }} >Click Here</button>
        {state.showText && <h3>Text Show</h3>}
    </div>
  )
}

export default UseReducerDemo