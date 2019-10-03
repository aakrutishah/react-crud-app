import React, { Component } from 'react';

class Employee extends Component {

  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      id: null,
      mockData: [{
        id: '1',
        fname: 'Aakruti',
        lname: 'Shah',
        done: false,
        date: new Date()
      }, {
        id: '2',
        fname: 'Aakanksha',
        lname: 'shah',
        done: false,
        date: new Date()
      }, {
        id: '3',
        fname: 'Aayushi',
        lname: 'Shah',
        done: false,
        date: new Date()
      }, {
        id: '4',
        fname: 'Milan',
        lname: 'Shah',
        done: false,
        date: new Date()
      }, {
        id: '5',
        fname: 'Neena',
        lname: 'Shah',
        done: false,
        date: new Date()
      }]
    }
  }

  onSubmitHandle(event) {
    event.preventDefault();

    this.setState({
      mockData: [...this.state.mockData, {
        id: Date.now(),
        fname: event.target.fname.value,
        lname: event.target.lname.value,
        done: false,
        date: new Date()
      }]
    });

    event.target.fname.value = '';
    event.target.lname.value = '';
  }

  onDeleteHandle() {
    let id = arguments[0];

    this.setState({
      mockData: this.state.mockData.filter(item => {
        if (item.id !== id) {
          return item;
        }
      })
    });
  }

  onEditHandle(event) {
    this.setState({
      edit: true,
      id: arguments[0],
      fname: arguments[1],
      lname: arguments[2]
    });
  }

  onUpdateHandle(event) {
    event.preventDefault();

    this.setState({
      mockData: this.state.mockData.map(item => {
        if (item.id === this.state.id) {
          item['fname'] = event.target.fnameUpdated.value;
          item['lname'] = event.target.lnameUpdated.value;
          return item;
        }

        return item;
      })
    });

    this.setState({
      edit: false
    });
  }

  renderEditForm() {
    if (this.state.edit) {
      return <form onSubmit={this.onUpdateHandle.bind(this)}>
        <input type="text" name="fnameUpdated" className="item" defaultValue={this.state.fname} />
        &nbsp;&nbsp;
        <input type="text" name="lnameUpdated" className="item" defaultValue={this.state.lname} />
        &nbsp; <button className="button3">Update</button>
        </form>
    }
  }

  render() {
    return (
      <div>
        {this.renderEditForm()}
        <form  className={ this.state.edit ? 'hide' : ''} onSubmit={this.onSubmitHandle.bind(this)}>
          <p style={{textAlign:"center",fontWeight:"bold"}}>Add Employee</p>
          <h4>First Name:</h4> 
          <input type="text" name="fname" className="item" />
          <h4>Last Name</h4>
          <input type="text" name="lname" className="item" />
          &nbsp;<button className="button1">Add</button>
        </form>
        <h4>Employee List</h4>
        <ul>
          {this.state.mockData.map(item => (
            <li key={item.id}>&nbsp;&nbsp;&nbsp;
              {item.fname}&nbsp;{item.lname}&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;<button className="button3" onClick={this.onEditHandle.bind(this, item.id, item.fname, item.lname)}>Edit</button>
              &nbsp;&nbsp;<button className="button2" onClick={this.onDeleteHandle.bind(this, item.id)}>Delete</button>
               </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Employee;

