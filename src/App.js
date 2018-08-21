import React, { Component } from 'react';
import 'tachyons';
import './App.css';
import Login from './Containers/Login';
import Register from './Containers/Register';
import Navigation from './Containers/Navigation';
import ForgotPassword from './Containers/ForgotPassword';
import DoctorsPage from './Containers/DoctorsPage.js'
import PatientsPage from './Containers/PatientsPage.js';
import AdminPage1 from './Containers/AdminPage1.js'


const initState={
  //initializes the state to original state.
  route:'signin',
  user: {
    id: '',
    name: '',
    type: '',
    email: '',
    joindate: '',
    contactList: [],
  }
}

class App extends Component {
  constructor(){
    super();
    this.state={
      route:'signin',
      user:{
        id :'',
        name:'',
        type:'',
        email:'',
        joindate:'',
        contactList:[],
      }
    }
    this.route = {
      signin:'register',
      register:'register',
      forgotpassword:'forgotpassword',
      patient:'patient',
      doctor:'doctor',
      admin:'admin',
      signout:'signout'
    }
    //binding the functions is necessary in order to preserve 'this'
    this.loadUserOnLogin = this.loadUserOnLogin.bind(this);
    this.onRouteChange = this.onRouteChange.bind(this);
    this.clearState = this.clearState.bind(this);
  }
  loadUserOnLogin(data){
    //loads user data on login
    //gets data from the backend
    //data{id:,name:,email:,contactLists:,joindate:,type:}
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        contactList: data.contactList,
        joindate: data.joined,
        type:data.type
      }
    })
  }
  onRouteChange(data){
    //changes the route of the app
    //refer this.route
    //data=route
    this.setState({route:this.route[`${data}`]});
    console.log(this.route[`${data}`])
  }
  clearState(){
    //cleares the state of the app.
    this.setState(initState);
  }

  render() {
    return(
    <div className='App'>
    <Navigation className='AppNavigation'
    route={this.state.route}
    onRouteChange={this.onRouteChange}
    clearState={this.clearState}
    />
    {(()=>{
    switch(this.state.route){
      case 'signin':
        return(
          <div className="AppBody">
          <Login 
            loadUserOnLogin={this.loadUserOnLogin}
            onRouteChange={this.onRouteChange}
          />
          </div>
        )

      case 'register':
        return(
          <div className='AppBody'>
          <Register route='register'/>
          </div>
        )

      case 'forgotpassword':
        return(
          <div className='AppBody'>
          <ForgotPassword />
          </div>
        )

      case 'patient':
        return(
          <div className="AppBody">
            <PatientsPage user={this.state.user}/>   
          </div>);

      case 'doctor':
        return(
          <div className="AppBody">
          <DoctorsPage user={this.state.user}/>   
          </div>);

      case 'admin':
        return (
          <div className="AppBody">
          <AdminPage1 user={this.state.user}/>
          </div>);

      default:
        return(
          <div>
          <p> 404 oops! page not found</p>
          </div>
        )
      
    }
    })()
    })
    </div>)
  }
}

export default App;
