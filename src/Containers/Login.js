import React, {Component} from 'react';
import './Login.css';

class Login extends Component{

    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    
    onEmailChange=(event)=>{
        // console.log(event.target.value);
        this.setState({email : event.target.value});
    }

    onPasswordChange=(event)=>{
        // console.log(event.target.value);
        this.setState({password : event.target.value});
    }

    onSubmitLogin = (event) => {
        event.preventDefault();
        fetch('http://127.0.0.1:3001/signin',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                email:this.state.email,
                password:this.state.password
            })
        }).then(response=>response.json())
        .then(data =>{
            if(data.received === 'success'){
                // console.log(data.received);
                this.props.loadUserOnLogin(data)
                this.props.onRouteChange(`${data.type}`);
            }else{
                alert('entered wrong unsername or password!!!');
            }
        })
    };

    

    render(){
        return(
            <div className='ba br2'>
                <main className="pa4 black-80">
                    <form className="measure center">
                        <fieldset id="login" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="login-email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="login-email-address"
                                onChange={(event)=>this.onEmailChange(event)}/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="login-password">Password</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="login-password"
                                onChange={(event)=>this.onPasswordChange(event)}/>
                            </div>
                        </fieldset>
                        <div className="tc">
                            <button 
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            onClick={(event)=>this.onSubmitLogin(event)}
                            >SIGN IN</button>
                        </div>
                        <div className="lh-copy mt3 tc">
                            <div className="f6 link dim black db" 
                            onClick={() => this.props.onRouteChange('register')}
                            >Register</div>
                            
                            <div className="f6 link dim black db" 
                            onClick={() => this.props.onRouteChange('forgotpassword')}
                            >Forgot your password?</div>
                        </div>
                    </form>
                </main>

            </div>
        );
    }
}

export default Login;