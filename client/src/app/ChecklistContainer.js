import React, {Component} from "react";
import Checklist from "./Checklist";

class ChecklistContainer extends Component {
  constructor() {
    super();
    this.state = {checklists : []};
  }
  componentDidMount() {
    fetch('/checklists')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const {checklists} = json;
        this.setState({checklists});
      });
  }
  viewChecklist = (checklist) => {
    const {id} = checklist;
    this.props.updateShow("view", id);
  }
  render() {
      const {checklists} = this.state;
      const checklistElements = checklists.map((checklist) => {
        return (<div key={checklist.id} onClick={() => this.viewChecklist(checklist)}>{checklist.name}</div>);
      })
      return (<div>{checklistElements}</div>);
  }
}

export default ChecklistContainer;
