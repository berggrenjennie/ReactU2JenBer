/* DashBoardComponent is a class component which has three states in the constructor:
1- userList which is an array
2- a value that respects the value of the input field in the form.
3-color which we use to change the colour of the text in the user list.
the component has also four methods.
1-handleChange: To control and change the value of the input field in the form by using setState.
2-addUserName: To add the value of the input field as an item into the userList array.
3-removUserName: To remove an item from the userList array.
4-toggleColor: To change the color of the text of user by change the state of the color
from true till false or vice versa by using setState.
*/
import React, { Component, Fragment } from 'react';
import UserListComponent from '../components/UserListComponent';
import CardComponent from '../components/CardComponent';
import PropTypes from 'prop-types';

import {Container,Row,Col,Button,Form,ListGroup} from 'react-bootstrap';


// Klassen innehåller olika states som används i komponenterna, funktioner som
// hanterar värdet i inputfält, och de olika knapparnas funktioner.
class DashBoardComponent extends Component {

constructor(props) {
  super(props);
  this.state = {
      userList:[
        {id:1, name: 'Mimmi', isActive: true},
        {id:2, name: 'Kalle', isActive: false},
        {id:3, name: 'Klara', isActive: true},
        {id:4, name: 'John', isActive: true},
        {id:5, name: 'Stina', isActive: false}
        ],
      value:"",
      color:true
    };
this.handleChange = this.handleChange.bind(this);
this.addUserName = this.addUserName.bind(this);
}

// Varnar om datatypen inte stämmer överens
static propTypes = {
  userList: PropTypes.shape({
    id:PropTypes.number,
    name:PropTypes.string,
    isActive:PropTypes.bool
  }),
  value: PropTypes.string,
  color: PropTypes.bool
}

// Eventfunktion som ändrar statet på value när man skriver i inputfältet
handleChange(event) {
this.setState({value: event.target.value});
}

// Eventfunktion som lägger ihop den befintliga UserList med den nya användaren som
// skrivs in i inputfältet och sparas i value-statet
addUserName(event) {
const newUsers = this.state.userList.concat([this.state.value]);
this.setState({userList: newUsers});
event.preventDefault();
}

// Funktion som tar bort en användare från UserList
removeUserName = (e) => {
const removeUsers = this.state.userList.slice(0, -1);
this.setState({userList: removeUsers});
}


 // Funktion som ändrar statet på color mellan true och false
   toggleColor = (e) => {
     this.setState({
       color: !this.state.color
     })
   }

   render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col  lg="6">
              <div >
                <CardComponent showInfo={false}>
                  <Button id="btn" variant="warning">Show Inactive</Button>
                  <ListGroup>
                    {this.state.userList.map((user) =>
                      <UserListComponent key={user.id} color={this.state.color} user={user}/>
                    )}
                  </ListGroup>
                  <div>
                  <Button variant="warning" onClick={() =>this.toggleColor(this.state.color)}>Toggle color</Button>
                  </div>
                  <br />
                </CardComponent>
             </div>
           </Col>

           <Col  lg="6">
             <div >
               <CardComponent showInfo={false}>
                 <Form onSubmit={this.addUserName}>
                   <Form.Control className="inputForm" size="lg" type="text" placeholder="User Name" value={this.state.value}  onChange={this.handleChange} />
                   <br />
                   <Button variant="success" type="submit">  Add user name</Button>
                 </Form>
                  <br />

                 <div>
                  <Button variant="danger" onClick={this.removeUserName}>Remove user name</Button>
                 </div>

                 <br />
              </CardComponent>
            </div>
          </Col>
       </Row>
     </Container>
    </Fragment>
    );
  }
}

export default DashBoardComponent;
