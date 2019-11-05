import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ListItem from "./components/listItem";

class App extends Component {
  state = {
    list: [
      {
        label: "faBold",
        id: 1
      },
      {
        label: "faItalic",
        id: 2
      },
      {
        label: "faUnderline",
        id: 3
      }
    ]
  };
  render() {
    const { list } = this.state;
    return (
      <div className="card mx-auto my-auto">
        <div className="card-header">
          <ul className="list-group list-group-horizontal">
            {list.map(listItem => (
              <ListItem
                key={listItem.id}
                id={listItem.id}
                label={listItem.label}
              />
            ))}
            {/* <li className="list-group-item">
              <FontAwesomeIcon icon={faBold} />
            </li>
            <li className="list-group-item">
              <FontAwesomeIcon icon={faItalic} />
            </li>
            <li className="list-group-item">
              <FontAwesomeIcon icon={faUnderline} />
            </li> */}
          </ul>
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text"></p>
        </div>
      </div>
    );
  }
}

export default App;
