import React,{Component} from 'react';
import 'tachyons';
import ForgotPasswordCode from './ForgotPasswordCode.js'
import ForgotPasswordCode2 from './ForgotPasswordCode2.js';

class ForgotPassword extends Component{
    constructor(props){
        super(props);
        this.state ={
            email:"",
            code:"",
            password:"",
            password2:"",
            route:"",
            passwordsCompare:""
        }
        this.onSubmitSend = this.onSubmitSend.bind(this);
        this.onSubmitSend2 = this.onSubmitSend2.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onChangePassword2=this.onChangePassword2.bind(this);
        this.changePassRoute = this.changePassRoute.bind(this);
    };

    onSubmitSend =(event)=>{
        event.preventDefault();

        fetch('https://glacial-reef-69254.herokuapp.com/forgotpassword',{
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.email
            })
        }).then(res=>res.json())
        .then((result)=>{
            if (result==='success'){
                return true;
            }else{ throw new Error()}
        }).then(()=>{
            this.setState({route:'newFields'})

        }).catch((err)=> alert('check the values that you have entered!!!'))
    }

    onSubmitSend2=(event)=>{
        event.preventDefault();
       
        fetch('https://glacial-reef-69254.herokuapp.com/resetPassword', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.email,
                code : this.state.code,
                password:this.state.password,
                password2:this.state.password2
            })}).then(res=>res.json())
                .then((result) => {
                    if (result === 'success') {
                        return true;
                    } else { throw new Error() }
                }).then(() => {
                    this.setState({ route: '' });
                    this.props.onRouteChange('signin');

                    alert('login with your new login credentials!!!!')

                }).catch((err) => alert("retry"))
    }


    onChangeEmail=(event)=>{
        event.preventDefault();
        this.setState({email:event.target.value})
    };
    onChangeCode = (event) => { 
        event.preventDefault();
        this.setState({ code: event.target.value })
    };
    onChangePassword = (event) => { 
        this.setState({ password: event.target.value })
    };
    onChangePassword2  = (event) => {
    
        if (event.target.value === this.state.password) {
            this.setState({
                password2: event.target.value,
                passwordsCompare: 'passwords match'
            })
        } else {
            this.setState({
                password2: event.target.value,
                passwordsCompare: "passwords doesn't match"
            })
        }
    }
    changePassRoute=()=>{
        this.setState({
            route:"newFields"
        })
    }
    

    render(){

        if(this.state.route ==='newFields'){
            return <ForgotPasswordCode2
            onChangeEmail={this.onChangeEmail}
            onChangeCode={this.onChangeCode}
            onChangePassword ={this.onChangePassword}
            onChangePassword2 ={this.onChangePassword2}
            passwordsCompare={this.state.passwordsCompare} 
            onSubmitSend2 ={this.onSubmitSend2}
            
            />
        }else{
            return <ForgotPasswordCode
            onChangeEmail = {this.onChangeEmail}
            onSubmitSend ={this.onSubmitSend}
            changePassRoute={this.changePassRoute}
            />
        }
    }
};
export default ForgotPassword;