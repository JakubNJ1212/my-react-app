import React, {useState, useEffect, useRef} from 'react';

function MyComponent() {

    const inputRef = useRef(null);


    useEffect(() => {

        console.log("Logged/rendered")
    });

    function handleClick() {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor="yellow";
    };

 return(
    <>
        <button onClick={handleClick}>Click me</button>
        <input ref={inputRef}/>
    </>
 )

}

export default MyComponent