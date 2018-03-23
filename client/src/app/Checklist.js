import React, {Component} from 'react';

class Checklist extends Component {
  constructor() {
    super();
    this.state = {checklist : null};
  }
  componentDidMount() {
    const {checklistId} = this.props;
    fetch(`/checklists/${checklistId}`)
      .then((response) => {
        return response.json();
      })
      .then((checklist) => {
        this.setState({checklist : checklist});
      });
  }
  render () {
    const {checklist} = this.state;
    let checklistElement = "";
    if(checklist) {
      const name = <div>{checklist.name}</div>;
      console.log("Checklist", checklist);
      const items = checklist.items.map(item => {
        return (
          <li>
            <input type="checkbox" checked={item.checked}/>
            <label>{item.text}</label>
          </li>
        )
      });
      checklistElement = (
        <div>
          {name}
          <ul>
            {items}
          </ul>
        </div>
      );
    }
    return <div>{checklistElement}</div>;
  }
}
export default Checklist;
