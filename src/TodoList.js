import React from 'react'
import {Todo} from './Todo'


export default class TodoList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {items} = this.props;
        const todos = items.map((todo,index)=><Todo key={index} data={todo}></Todo>);
        return(
            <div>
                {todos}
                
            </div>
        );
    }

}
