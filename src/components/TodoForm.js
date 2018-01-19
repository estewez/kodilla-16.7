import React from 'react';
//import style from './TodoForm.css';

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
    render() {
        return (
            <form onSubmit={console.log('submit')}>
                <label>
                    Enter Your Todo Task
                    <input  
                        type="text" 
                        value={this.state.text}
                        onChange={this.handleChange}/>
                </label> 
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default TodoForm;