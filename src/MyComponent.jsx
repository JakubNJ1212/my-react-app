import React, {useState} from 'react';

function MyComponent() {

const [name, setName] = useState("Ime");
const [quantity, setQuantity] = useState(1);
const [comment, setComment] = useState();
const [payment, setPayment] = useState("");
const [shipping, setShipping] = useState()


    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

return(

        <div>
            <input value={name} onChange={handleNameChange}></input>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"></input>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} 
            placeholder="Enter your comment here..."></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option>Select an option</option>
                <option value="Preuzecem">Preuzecem</option>
                <option value="Placanje karticom">Placanje karticom</option>
                <option value="Kripto">Kripto</option>
            </select>

    <br></br>
            <label>
                <input type="radio" value="hitna-dostava" checked={shipping === "hitna-dostava"} onChange={handleShippingChange}></input>
                Hitna dostava: 
            </label>

            <label>
                <input type="radio" value="cc-paket" checked={shipping === "cc-paket"} onChange={handleShippingChange}></input>
                CC paket: 
            </label>
            <p>Shipping: {shipping}</p>
            
        </div> 

     );

}

export default MyComponent