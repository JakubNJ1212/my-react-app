import React, {useState, useEffect} from 'react';

function MyComponent() {

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");


        return() => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
        }


    }, []);


    function handleResize() {
        setWidth(windows.innerWidth);
        setHeight(windows.innerHeight);
    }



return(<>
        <p>Window width: {width}px</p><br/>
        <p>Window height: {height}px</p>
</>
 );

}

export default MyComponent