import React from 'react';

// Initial data of to do list
let taskList = [{
    id: 0,
    value: 'read harry potter'
  }, {
    id: 1,
    value: 'math homework'
}];
// function component ToDoItem used in ToDoList
function ToDoItem (props) {
    let itemClass = props.task.checked ? 'item-checked' : 'item'
    return(
        <div className={itemClass}>
            <input type="checkbox" 
                id={props.task.id} 
                value={props.task.value} 
                onChange={(e) => props.task.markChecked(e, props.task.id)}/>
            <label htmlFor={props.task.id}>{props.task.value}</label>
            {props.task.checked ? <div>done!</div> : null}
        </div>
    );
}
// class component ToDoList 
export default class ToDoList extends React.Component {
    constructor() {
        super();
        this.state = {
            taskList: taskList.map(e => {
                let newE = {};
                Object.keys(e).forEach(key => {
                    newE[key] = e[key];
                });
                newE.checked = false;
                newE.markChecked = this.handleClickCheckbox;
                return newE;
            })
        }
    }

    handleClickCheckbox = (e, id) => {
        let updatedTaskList = JSON.parse(JSON.stringify(this.state.taskList));
        updatedTaskList[id].checked = e.target.checked;
        this.setState({taskList: updatedTaskList});
    }

    handleClickAdd = () => {
        let updatedTaskList = this.state.taskList.concat({
            id: this.state.taskList.length, 
            value: `new task ${this.state.taskList.length + 1}`,
            checked: false,
            markChecked: this.handleClickCheckbox
        });
        this.setState({taskList: updatedTaskList});
    }

    render() {
        return(
            <div>
                <h1>To Do List</h1>
                {this.renderTaskList()}
                <button onClick={this.handleClickAdd}>Add</button>
            </div>
        );
    }

    renderTaskList = () => {
        return this.state.taskList.map((task, id) => {
            task.markChecked = this.handleClickCheckbox;
            return (
                <ToDoItem task={task} key={id}></ToDoItem>
            );
        });
    };
};