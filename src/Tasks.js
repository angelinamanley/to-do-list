import React from 'react'

export default class Tasks extends React.Component {



    render() {
        return (
            <div className="tasks">
                <h5>Tasks</h5>
                {this.props.taskArray.map(task=> <div className="task"><div className="label">{task.category}</div><div className="text">{task.text}</div></div>)}
            </div>
        )
      }

}
