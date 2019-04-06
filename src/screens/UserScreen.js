import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import CardComponent from '../components/CardComponent';


class UserScreen extends Component {
  render() {
    const user = this.props.match.params.id;
      return (
        <CardComponent>
        {user ? <div>{"Selected user:  " + user}</div> : <Redirect from="/user" to="/"/>}

        </CardComponent>
      );
  }
}

export default UserScreen;
