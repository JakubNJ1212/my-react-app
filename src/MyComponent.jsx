import React, {useState, useEffect, useRef} from 'react';

function MyComponent() {

    const ref = useRef(0);


    useEffect(() => {

        console.log("Logged/rendered")
    });

    function handleClick() {
        ref.current = ref.current + 1;
        console.log(ref.current)
    };

 return(
    <>
        <button onClick={handleClick}>Click me</button>
    </>
 )

}

export default MyComponent