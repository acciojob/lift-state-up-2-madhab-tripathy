import React from 'react'
const Child = ({setInputValueFn})=>{

    return(
        <div className="child">
            <h2>Child Component</h2>

            <input onChange={(e)=>setInputValueFn(e.target.value)}/>
        </div>
    )
}
export default Child;
