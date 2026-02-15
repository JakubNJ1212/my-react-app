import React, {useState} from 'react';

function MyComponent() {

const [name, setName] = useState("Guest");
const [age, setAge] = useState(0);
const [isEmployed, setIsEmployed] = useState(false);

const updateName = () => {
    setName('Petar');
}

const incrementAge = () => {
    setAge(age +1);
}

const toggleEmployementStatus = () => {
    setIsEmployed(!isEmployed);
}
return(

        <div>
             <p>Name: {name}</p>
            <button onClick={updateName}>Set name:</button>
            <p>Age: {age}</p>
            <button onClick={incrementAge}>increment Age:</button>

            <p>Employed {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployementStatus}>Toggle Status</button>
        </div>  );

}

export default MyComponent