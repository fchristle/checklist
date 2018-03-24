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
        return (
          <div key={checklist.id}>
            {checklist.name}
            <input value=">" type="button" onClick={() => this.viewChecklist(checklist)}/>            
          </div>);
      })
      return (<div>{checklistElements}</div>);
  }
}

export default ChecklistContainer;
