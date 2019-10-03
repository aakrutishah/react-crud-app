import React,  { Component }  from 'react';
import './App.css';
import Employee from './components/Employee';

class App extends Component {
  constructor(props) {    
  super(props);
  this.state = {      
    show: false    
  };  
  
}

render() {      
     return (     

      <div className="App">
        
        <Employee/>
        </div>
      ); 
    }
}

export default App;
