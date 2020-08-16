import React from 'react'
import './Todo.css'

export class Todo extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {text,priority,dueDate} = this.props.data;
        return(
            <div className="Tarjeta">
                <h3>{text}</h3>
                <p><b>Priority:</b> {priority}</p>
                <p><b>Date:</b> {dueDate.toString()}</p>
            </div>
        );
    }
}