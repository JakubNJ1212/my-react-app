import React, {useContext} from 'react'

function ComponentD(props) {
    return(
        <div className="Box">
            <h1>Component D</h1>
            <h2>{`Goodbye ${props.user}`}</h2>
        </div>
    )
}
export default ComponentD;