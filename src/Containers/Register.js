import React,{Component} from 'react';

class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            user : '',
            email: '',
            password: '',
            password2:'',
            passwordsCompare:''
        }
    };

    onUserChange=(event)=>{
        this.setState({user:event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onPassword2Change=(event)=>{
        if(event.target.value === this.state.password){
            this.setState({
                password2:event.target.value,
                passwordsCompare: 'passwords match'
            })
        }else{
            this.setState({ 
                password2: event.target.value, 
                passwordsCompare : "passwords doesn't match"
            })
        }
    }

    onSubmitRegister = (event) =>{
        event.preventDefault();
        // console.log(this.state);
        if(this.state.user ===''||this.state.email===''||this.state.password===''||this.state.password2===''|| this.passwordsCompare===''|| this.passwordsCompare==="passwords doesn't match"){
            alert('Enter all the values perfectly');
        }else{
            fetch('https://glacial-reef-69254.herokuapp.com/register',{
                method:'post',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    user:this.state.user,
                    password:this.state.password,
                    email:this.state.email
                })
            }).then(res=>res.json())
            .then(res =>{
                if(res ==='success'){
                    alert('user successfully registered!!!')
                    this.props.onRouteChange('signin');
                }else{
                    alert('retry registering!!!');
                }
        })

        }
    }


    render(){
        return(
            <div className='ba br2'>
                <main className="pa4 black-80">
                    <form className="measure center">
                        <fieldset id="register" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Register</legend>

                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="register-name">User</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="register-name" id="register-name"
                                    onChange={(event) => this.onUserChange(event)}
                                />
                            </div> 
                            
                            
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="register-email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="register-email-address" 
                                onChange ={(event)=>this.onEmailChange(event)}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="register-password1">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="register-password1" 
                                onChange={(event)=>this.onPasswordChange(event)}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="register-password2">Retype the Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="register-password2" 
                                onChange={(event)=>this.onPassword2Change(event)}
                                />
                                <p>{this.state.passwordsCompare}</p>
                            </div>
                        </fieldset>
                        <div className="tc">
                            <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"  onClick={(event) => this.onSubmitRegister(event)}>REGISTER</button>
                        </div>
                        <div className="lh-copy mt3 tc">
                            <div className="f6 link dim black db" onClick={() => this.props.onRouteChange('signin')}>Sign In</div>
                            <div className="f6 link dim black db" onClick={() => this.props.onRouteChange('forgotpassword')}>Forgot your password?</div>
                        </div>
                    </form>
                </main>

            </div>
        )
    }
}

export default Register;