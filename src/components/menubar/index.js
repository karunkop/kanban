import React from "react";
// import AddTask from "./createtaskform.js";
import AddColumn from "./createColumn";

class Menu extends React.Component {
  state = {
    heading: ""
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="menu-container">
        <div className="menu-item">Tasks</div>

        <div className="menu-item">
          <input
            name="heading"
            type="text"
            className="form-control"
            placeholder="Add columns for workspace"
            onChange={this.onChange}
          />
        </div>
        <div className="menu-item-end">
          <AddColumn
            name={this.state.heading}
            active={this.state.heading.length > 0 ? false : true}
            id={this.props.id + 1}
            addColumn={this.props.addColumn}
          />
        </div>
      </div>
    );
  }
}

export default Menu;
