import React from "react";
import Menu from "./components/menubar/index.js";
import Column from "./components/columns/Column.js";
import CustomCard from "./components/Card/index";

class App extends React.Component {
  state = {
    columns: [
      {
        column_id: 1,
        category: "Uncategorized",
        style: "red",
        icon: "info",
        task_card: []
      },
      {
        column_id: 2,
        category: "In Progress",
        style: "orange",
        icon: "settings",
        task_card: []
      },
      {
        column_id: 3,
        category: "Completed",
        style: "lightgreen",
        icon: "playlist_add_check",
        task_card: []
      }
    ]
  };

  addColumn = c => {
    const columns = [...this.state.columns];

    columns[`${c.column_id - 1}`] = c;
    this.setState({
      columns
    });
  };

  addCard = c => {
    const card = [...this.state.columns];
    const length = this.state.columns[`${c.id - 1}`].task_card.length;
    card[`${c.id - 1}`].task_card[length] = c;
    this.setState({
      columns: card
    });
  };
  render() {
    return (
      <div className="App">
        <Menu
          addColumn={this.addColumn}
          id={this.state.columns[this.state.columns.length - 1].column_id}
        />
        <div className="main-container">
          <div className="content-container">
            {this.state.columns.map((data, i) => (
              <Column
                key={data.column_id}
                details={data}
                index={data.column_id}
                addCard={this.addCard}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
