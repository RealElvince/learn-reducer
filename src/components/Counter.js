import React,{useReducer} from 'react';


const initialState = 0;

const reducer = (currentState,action) => {
  switch(action){
     case 'increment':
      return currentState + 1
     case 'decrement':
      return currentState - 1
     case 'reset':
      return initialState
     default:
      return currentState
    }
}

function Counter() {

 const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
       <div>Count: {count}</div>
       <button onClick={()=>dispatch('reset')}>Reset</button>
       <button onClick={()=>dispatch('decrement')}>Decrement</button>
       <button onClick={()=>dispatch('increment')}>Increment</button>
    </div>
  )
}

export default Counter;