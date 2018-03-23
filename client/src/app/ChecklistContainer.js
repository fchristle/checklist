import React, {Component} from "react";
import Checklist from "./Checklist";
import {listChecklists} from "./api-utils";

class ChecklistContainer extends Component {
  constructor() {
    super();
    this.state = {checklists : []};
  }
  componentDidMount() {
    listChecklists((checklists) => this.setState({checklists}));

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
