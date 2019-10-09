import React from "react";
import "./App.css";
import { CATEGORIES } from "./data";
import Categories from "./Categories.js";
import Tasks from "./Tasks.js";

class App extends React.Component {
  state = {
    category: "All",
    tasks: [
      {
        text: "Buy rice",
        category: "Food"
      },
      {
        text: "Save a tenner",
        category: "Money"
      },
      {
        text: "Build a todo app",
        category: "Code"
      },
      {
        text: "Build todo API",
        category: "Code"
      },
      {
        text: "Get an ISA",
        category: "Money"
      },
      {
        text: "Cook rice",
        category: "Food"
      },
      {
        text: "Tidy house",
        category: "Misc"
      }
    ]
  };

  addNewTask = object => {
    console.log(object)
    this.setState({
      category: this.state.category,
      tasks: [...this.state.tasks, object]

    });
  };

  filterCategory = () => {
    if (this.state.category === "All") {
      return this.state.tasks;
    } else {
      return this.state.tasks.filter(
        task => task.category === this.state.category
      );
    }
  };

  changeCategoryState = name => {
    this.setState({ text: [...this.state.tasks], category: name });
  };

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <Categories
          catArray={CATEGORIES}
          changeCategoryState={this.changeCategoryState}
        />
        <Tasks
          addTask={this.addNewTask}
          catArray={CATEGORIES}
          taskArray={this.filterCategory()}
        />
      </div>
    );
  }
}

export default App;
