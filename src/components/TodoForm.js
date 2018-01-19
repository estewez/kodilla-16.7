import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({text: e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({text: ''});
        this.props.add(this.state.text);
    }
    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)} className={style.TodoForm}>
                <label className={style.Label}>
                    Enter Your Todo Task
                    <input  
                        placeholder={'Here'}
                        className={style.Input}
                        type="text" 
                        value={this.state.text}
                        onChange={this.handleChange}/>
                </label> 
                <input type="submit" value="Submit" className={style.Button}/>
            </form>
        );
    }
}

export default TodoForm;