import React, {useState, useEffect} from 'react';

function MyComponent() {

const [count, setCount] = useState(0);
const [color, setColor] = useState("Green");





useEffect(() =>  {
    document.title = `Count: ${count}` 
}, [count])







function handleAddCount() {
    setCount(c => c + 1)
}

function handleSubCount() {
    setCount(c => c - 1)
}

return(<>
    <p>Count: {count}</p>    
    <button onClick={handleAddCount}>Add</button>
    <button onClick={handleSubCount}>Subtract</button><br/>
    <button onClick={handleSubCount}>Change color</button>
</>
 );

}

export default MyComponent