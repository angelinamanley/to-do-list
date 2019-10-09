import React from 'react'

export default class Categories extends React.Component {


    handleClick = (event) => {
        this.props.changeCategoryState(event.target.innerText)
    }

    render() {
        return (
            <div className="categories">
          {this.props.catArray.map(category => <button onClick={this.handleClick} label={category}>{category}</button>)}
            </div>
        );
      }

}

