
function Picture() {
    const imageUrl = './src/assets/SSA50206.jpg';
    const handleClick = (e) => e.target.style.display = 'none';


    return(<img src={imageUrl} onClick={(e) =>handleClick(e) }></img>) 
}

export default Picture