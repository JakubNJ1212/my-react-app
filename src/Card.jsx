import profilePic from './assets/SSA50206.JPG'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="slika1"></img>
            <h2 className="card-title">Hiking </h2>
            <p className="card-text">1 Maj 2025</p>
        </div>

    );
        
    
}

export default Card