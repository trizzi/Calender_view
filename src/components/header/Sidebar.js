import React, { Component } from 'react';

export class Sidebar extends Component {
  render() {
    const sideClass = this.props.hidden ? 'sidebar sidebar-hidden' : 'sidebar';
    return (
      <div className={sideClass}>
        <div className='sidebar-icons'>
          <i className='fas fa-search'></i>
          <i className='fas fa-chevron-left'></i>
          <i className='fas fa-chevron-right'></i>
        </div>
        <div className='sidebar-lists'>
          <h3>PHYSX-EVENT</h3>
          <ul>
            <li>Login</li>
            <li>CalenderView</li>
            <li>UserProfile</li>
            <li>AddEventForm</li>
            <li>EventPage</li>
            <li>Analytics</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
