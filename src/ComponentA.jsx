import ComponentB from './ComponentB.jsx'
import React, {useState} from 'react'


function ComponentA() {
    const [user, setUser] = useState("Username");



    return(
        <div className="Box">
            <h1>Component A</h1>

            <h2>{`hello ${user}`}</h2>
            <ComponentB  user={user}/>
        </div>
    )
}
export default ComponentA;