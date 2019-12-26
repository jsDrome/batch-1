import React, { Component } from 'react';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attendance: props.attendance,
    }
  }

  markAttendance = () => {
    const add = 1;

    this.setState({
      attendance: this.state.attendance + add,
    })
  };

  render(){
    return(
      <div>
        <h1>Person information</h1>
        <p><b>Firstname:</b> { this.props.name.firstname }</p>
        <p><b>Lastname:</b> { this.props.name.lastname }</p>
        <p><b>Attendance: { this.state.attendance}</b></p>
        <button onClick={this.markAttendance}>MARK ATTENDANCE</button>
      </div>
    )
  }
}

export default Person;