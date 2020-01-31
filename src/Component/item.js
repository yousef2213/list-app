import React from 'react'
import {ToDoConsumer} from '../Context'
import {FaTrashAlt,FaRegEdit} from 'react-icons/fa'
export default function item() {
    return (
        <ToDoConsumer>
            {value => {
                const {items, handelDelete,handelCheck} = value
                
                return(
                    <>
                        {items.map( item =>{
                            return(
                                <li key={item.id} className="list-group-item d-flex justify-content-between">
                                    <h5>{item.title}</h5>
                                    <div className="d-flex justify-content-around">
                                        <FaRegEdit onClick={() => handelCheck(item.id)} className="icon-edit" />
                                        <FaTrashAlt className="icon-transh"  onClick={ () =>handelDelete(item.id)} />
                                    </div>
                                </li>

                            )
                        } )}
                    </>
                )
            }}
        </ToDoConsumer>
    )
}
