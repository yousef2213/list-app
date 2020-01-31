import React, { Component } from 'react'
import uuid from 'uuid';

const ToDoContext = React.createContext(); 


export default class ToDoProvider extends Component {

    state = {
        items:[
            
        ],
        id : uuid(),
        item: '',
        edit: false
    }


    handelChange = (e) =>{
        const Change = e.target.value;
        this.setState({
            item:Change
        })
    }
    handelSubmit = (e) => {
        e.preventDefault();
        const itemTemp = {
            id: this.state.id,
            title : this.state.item
        }
        const listTemp = [...this.state.items,itemTemp]
        this.setState({
            items : listTemp,
            item:'',
            id: uuid(),
            edit: false
        })
        
    }
    handelDelete = (id) => {
        const items = this.state.items;
        const filtered = items.filter( item => item.id !== id )
        this.setState({
            items: filtered
        })
    }

    handelCheck = id =>{
        const items = this.state.items;
        const filtered = items.filter( item => item.id !== id )
        const check = items.find( item => item.id === id )
        this.setState({
            item: check.title,
            items: filtered,
            edit: true
        })
        
        
    }

    render() {
        return (
            <ToDoContext.Provider value={{
                ...this.state,
                handelSubmit: this.handelSubmit,
                handelChange : this.handelChange,
                handelDelete : this.handelDelete,
                handelCheck: this.handelCheck
            }}>
                {this.props.children}
            </ToDoContext.Provider>
        )
    }
}

const ToDoConsumer = ToDoContext.Consumer;

export {ToDoConsumer,ToDoProvider}