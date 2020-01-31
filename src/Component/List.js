import React from 'react'
import Item from './item'
export default function List() {
    return (
        <>
        <div className="col-10 mx-auto">
            <h6 className="py-2">Record your feedback</h6>
        </div>
        <div className="col-10 mx-auto"> 
            <ul className="list-group ">
                <Item />
            </ul>
        </div>
        </>
    )
}

