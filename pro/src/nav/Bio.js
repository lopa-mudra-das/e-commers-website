import React from 'react'
import DataTransfer from './Bio.json'
export default function Bio(){
    return(
        <div>
            {
                DataTransfer.map(json=>(
                    <div key={json.Name}>
                        <h1>{json.Name}</h1>
                        <h2>{json.age}</h2>
                        <h3>{json.gmail}</h3>
                        <h4>{json.location}</h4>
                    
                        </div>
                ))
            }
        </div>
    )
}