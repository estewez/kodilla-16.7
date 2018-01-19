import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = props => {
    return (
        <ul className={style.TodoList}>
            <Todo
                
            />
            {props.data.map(listValue => {
                return <Todo
                    text = {listValue.text}
                    remove = {props.remove}
                    id = {listValue.id}
                />
                //<li className={style.TodoItem} key={listValue.id} onClick={() => props.remove(listValue.id)}>{listValue.text}</li>;
            })}
        </ul>
    );
}

export default TodoList;