import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    toggleSidebar: PropTypes.func.isRequired,
  };

  onclick = (e) => {
    e.preventDefault();
    console.log('click');
    this.props.toggleSidebar(this.state.text);
  };
  render() {
    return (
      <nav className='navbar bg-light'>
        <div className='calender-view'>
          <i className='fas fa-bars' onClick={this.props.toggleSidebar}></i>
          <h1 className='lead'>CalenderView</h1>
        </div>

        <ul>
          <li>
            <i className='fas fa-file-alt'></i>
          </li>
          <li>
            <i className='fas fa-comment-alt'></i>
          </li>
          <li>
            <i className='fas fa-ellipsis-v'></i>
          </li>
          <li>
            <a href='https://www.axure.com/'>axure</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
