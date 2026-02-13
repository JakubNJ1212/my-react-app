
function Button(){
   const styles = {
  backgroundColor:"hsl(256, 51%, 36%)",
  color:"white",
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
   }

// let count = 0;

//    const handleClick = (name) => {
//       if (count < 3){
//          count++;
//          console.log(`${name} you've clicked me ${count} times`);
//       } else {
//          console.log(`${name} stop clicking me!`);
//       }
//    }

   const handleClick =(e) => e.target.textContent = "Clicked";

 return(
    <button style = {styles} onClick={(e) => handleClick(e)}>Click me</button>
 )
}

export default Button