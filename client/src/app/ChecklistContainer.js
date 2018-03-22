import React, {Component} from "react";

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
  render() {
      const {checklists} = this.state;
      const checklistElements = checklists.map((checklist) => {
        return (<div key={checklist.id} onClick={() => alert("Hello")}>{checklist.name}</div>);
      })
      return (<div>{checklistElements}</div>);
  }
}

export default ChecklistContainer;
