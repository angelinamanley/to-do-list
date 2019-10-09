import React from 'react'
import { createCoverageSummary } from 'istanbul-lib-coverage'

export default class Tasks extends React.Component {

    state = {
        newTask : "",
        newCat : ""
    }

  
    handleClick = (event) => {
        event.target.parentNode.remove()
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        let newTask = {
            text: event.target.children[0].value,
        category: event.target.children[1].value}
        this.props.addTask(newTask)
}

    addTasktoArray = (task) => {
        let newTasksArray = [...this.props.taskArray]
        newTasksArray.push(task)
        return newTasksArray
    }

    render() {
        return (
            <div className="tasks">
                <h5>Tasks</h5>
                <form class="new-task-form" onSubmit={this.handleFormSubmit}>
                  <input placeholder="New task details" type="text"></input>
                  <select>
                {this.props.catArray.map(category => <option>{category}</option>)}
                  </select>
                  <input type="submit" value="Add Task" />
              </form>
                {this.props.taskArray.map(task=> <div className="task"><div className="label">{task.category}</div><div className="text">{task.text}</div><button onClick={this.handleClick} className="delete">X</button></div>)}
            </div>
        )
      }

}
