import React, {useState, useEffect} from 'react';

function MyComponent() {

const [count, setCount] = useState(0);
const [color, setColor] = useState("Green");





useEffect(() =>  {
    document.title = `Count: ${count} ${color}` 
}, [count, color])







function handleAddCount() {
    setCount(c => c + 1)
}

function handleSubCount() {
    setCount(c => c - 1)
}

function changeColor() {
    setColor(c => c === "Green" ? "Red" : "Green")
}

return(<>
    <p style={{color: color}}>Count: {count}</p>    
    <button onClick={handleAddCount}>Add</button>
    <button onClick={handleSubCount}>Subtract</button><br/>
    <button onClick={changeColor}>Change color</button>
</>
 );

}

export default MyComponent