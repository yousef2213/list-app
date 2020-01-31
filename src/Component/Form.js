import React from 'react'
import {ToDoConsumer} from '../Context'

export default function Form() {
    return (
        <ToDoConsumer>
            {value => {
                const {handelChange,handelSubmit,item,edit} = value;
                return(
                    <>
                        <h3 className="col-10 mx-auto py-3 text-capitalize">What do you thing ...?</h3>
                        <form className="form-group col-10 mx-auto mb-4" onSubmit={handelSubmit}>
                            <input 
                            type="text" 
                            id="text" 
                            placeholder="Writer ...." 
                            className="form-control"
                            onChange={handelChange}
                            value={item}
                            
                            />
                            <button 
                            type="submit"
                            className={edit? "btn btn-success mt-3" :"btn btn-primary mt-3"} disabled={item?false: true}
                            > {edit ? "Edit Item" : "Add Item"} </button>
                        </form>
                    </>
                )
            }}
        </ToDoConsumer>
    )
}
