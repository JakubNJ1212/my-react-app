import React, {useState} from 'react';

function MyComponent() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState();
    const [carModel, setCarModel] = useState();


    function handleAddCar() {

    }

    function handleRemoveCar(index) {

    }

    function handleYearChange(event) {

    }
    
    function handleMakeChange(event) {
        
    }

     function handleModelChange(event) {
        
    }



return(<>
    <div>
         <h2>List of car objects</h2>   
    </div>
</>
 );

}

export default MyComponent