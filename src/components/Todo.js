import React from 'react';
import style from './Todo.css';

const Todo = (props) => {
    return <li className={style.Todo} key={props.id} onClick={() => props.remove(props.id)}>{props.text}</li>;
}

export default Todo;