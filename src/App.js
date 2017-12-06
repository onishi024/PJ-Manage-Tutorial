import React, { Component } from 'react';
import Display from './component/Display'
import Register from './component/Register'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      issues: [
        {id:1, title: "A案件", man_hours: 12.5, members: ["aさん", "bさん", "cさん"], type: "開発委託"},
        {id:2, title: "B案件", man_hours: 4.5, members: ["bさん", "cさん"], type: "作業依頼"}
      ],
      members: [
        {id:1, name:"aさん"},
        {id:2, name:"bさん"},
        {id:3, name:"cさん"}
      ],
      selected_issue_id: 1
    }
  }

  _onChangeIssue(selected_issue_id){
    this.setState({selected_issue_id})
  }

  _onRegisterIssue(issue){
    const _issue = {
      id: this.state.issues.length + 1,
      title: issue.title,
      man_hours: issue.man_hours,
      members: issue.members.map(member => member.name),
      type: issue.type
    }
    this.setState({issues: [...this.state.issues, _issue]})
  }

  _onRegisterMember(member){
    const _member = {
      id: this.state.members.length + 1,
      name: member
    }
    this.setState({members: [...this.state.members, _member]})
  }

  render() {
    return (
      <div className="App">
        <h1>案件管理画面</h1>
        <hr />
        <Display
          issues={this.state.issues}
          onChange={issue => this._onChangeIssue(issue)}
          selected_issue_id={this.state.selected_issue_id} />
        <hr />
        <Register
          members={this.state.members}
          onRegisterIssue={issue => this._onRegisterIssue(issue)}
          onRegisterMember={member => this._onRegisterMember(member)} />
      </div>
    );
  }
}

export default App;
