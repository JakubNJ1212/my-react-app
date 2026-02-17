import React, {useState} from 'react'


function Counter() {

const[count, setCount] = useState(0);

const increment = () => {
    setCount(count+1);
    setCount(count+1);
    setCount(count+1);
}

const decrement = () => {
    setCount(count-1);
}

const reset = () => {
    setCount(0);
}

return(

    <div className="counter-container">
          <p className="count-display">Count: {count}</p>
          <button onClick={increment} className="count-button"> Add:</button>
          <button onClick={decrement} className="count-button">Decrement</button>
          <button onClick={reset} className="count-button">Reset</button>

          
    </div>
    
);
        
}

export default Counter