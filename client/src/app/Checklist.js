import React, {Component} from 'react';
import {getChecklist} from './api-utils';

class Checklist extends Component {
  constructor() {
    super();
    this.state = {checklist : null};
  }
  componentDidMount() {
    const {checklistId} = this.props;
    getChecklist(checklistId, (checklist) => this.setState({checklist}))
  }
  handleKeyPress = (e) => {
    if(e.key === "Enter") {
      alert("done");
      console.log("Event", e);
    }
  }
  render () {
    const {checklist} = this.state;
    let checklistElement = "";
    if(checklist) {
      const name = <div>{checklist.name}</div>;
      console.log("Checklist", checklist);
      const items = checklist.items.map(item => {
        return (
          <li key={item.id}>
            <input type="checkbox" checked={item.checked}/>
            <label>{item.text}</label>
          </li>
        )
      });
      const inputElement = (
        <li>
          <input type="text" name="newItem" placeholder = "Add item"
              onKeyPress={this.handleKeyPress}/>
        </li>
      )
      checklistElement = (
        <div>
          {name}
          <ul>
            {items}
            {inputElement}
          </ul>
        </div>
      );
    }
    return <div>{checklistElement}</div>;
  }
}
export default Checklist;
