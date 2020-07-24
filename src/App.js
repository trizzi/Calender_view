import React, { Component } from 'react';
import './App.css';
import Navbar from './components/header/Navbar';
import Sidebar from './components/header/Sidebar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideSideBar: false,
    };
  }

  toggleSidebar = () => {
    this.setState({ hideSideBar: !this.state.hideSideBar });
  };

  render() {
    return (
      <div className='App'>
        <Navbar toggleSidebar={this.toggleSidebar} />
        <Sidebar hidden={this.state.hideSideBar} />
      </div>
    );
  }
}

export default App;
