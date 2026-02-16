import React, {useState} from 'react';

function ColorPicker() {


    const {color, setColor} = useState("#FFFFFF");

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return(
        <div className="color-picker-container">
            <h1>Yo</h1>
            <div className="color-display">
                
            </div>
        </div>

    )




}

export default ColorPicker;