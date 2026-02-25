import ComponentB from './ComponentB.jsx'

function ComponentA() {
    return(
        <div className="Box">
            <h1>Component A</h1>
            <ComponentB/>
        </div>
    )
}
export default ComponentA;