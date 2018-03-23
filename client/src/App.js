import React, {Component} from "react";
import ChecklistContainer from "./app/ChecklistContainer";
import Checklist from "./app/Checklist";

class App extends Component {
  state = {show : "list", id : null};

  updateShow = (show, id) => {
    this.setState({show, id})
  }
  render() {
    let showComponent = null;
    const {show, id} = this.state;
    switch(show) {
      case "list" :
          showComponent = <ChecklistContainer updateShow = {this.updateShow}/>;
          break;
      case "view" :
          showComponent = <Checklist checklistId = {id}/>;
          break;
    };
    return (<div>{showComponent}</div>);
  }
}

export default App;
