import React, { Component } from "react";
import CustomCard from "../Card/index";
import AddTask from "../menubar/createtaskform";

class Column extends Component {
  render() {
    return (
      <div className="content-item">
        <div
          className="category"
          style={{
            padding: "5px",
            backgroundColor: this.props.details.style,
            display: "inline-block",
            textAlign: "center",
            borderRadius: "15px",
            color: "white"
          }}
        >
          <h5 style={{ display: "inline-block" }}>
            <i className="material-icons">{this.props.details.icon}</i>
            {this.props.details.category}
          </h5>
        </div>

        <div className="content-droppable">
          {this.props.details.task_card.length > 0
            ? this.props.details.task_card.map((data, i) => (
                <CustomCard
                  key={i}
                  id={data.id}
                  title={data.title}
                  description={data.description}
                  style={this.props.details.style}
                />
              ))
            : null}

          <AddTask
            addCard={this.props.addCard}
            column_id={this.props.details.column_id}
          />
        </div>
      </div>
    );
  }
}

export default Column;
