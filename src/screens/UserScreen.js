import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import CardComponent from '../components/CardComponent';
import PropTypes from 'prop-types';


class UserScreen extends Component {
  static propTypes = {
    history: PropTypes.object,
    location:PropTypes.object,
    match:PropTypes.object
}

  render() {
  
    const user = this.props.match.params.id;
      return (
        <CardComponent>
        {user ? <div>{"Selected user:  " + user}</div> : <Redirect from="/user" to="/"/>}
        {/*user ? <div>{"Selected user : " + user}</div> :  <div>No user selected</div>*/ }
        </CardComponent>
      );
  }
}

export default UserScreen;
