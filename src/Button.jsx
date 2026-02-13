
function Button(){
   const styles = {
  backgroundColor:"hsl(256, 51%, 36%)",
  color:"white",
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
   }


   const handleClick = () => console.log("Ouch");

 return(
    <button style = {styles} onClick={handleClick}>Click me</button>
 )
}

export default Button