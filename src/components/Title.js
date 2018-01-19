import React from 'react';
import style from './Title.css';

const Title = props => {
    return (
        <div className={style.Title}>
            <h1 className='title'>{`Your Todo List`}</h1>
            <p>{`Todo list's length is: ${props.listLength}`}</p>
        </div>
    );
}

export default Title;