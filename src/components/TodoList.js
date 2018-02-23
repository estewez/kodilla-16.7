import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = props => {
    return (
        <ul className={style.TodoList}>
            {props.data.map(listValue => {
                return <Todo
                    key = {listValue.id}
                    text = {listValue.text}
                    remove = {props.remove}
                    id = {listValue.id}
                />
            })}
        </ul>
    );
}

export default TodoList;