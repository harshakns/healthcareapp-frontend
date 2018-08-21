import React,{Component} from 'react';
import 'tachyons';

class ForgotPasswordCode extends Component{

    constructor(props){
        super(props);
        this.blahblah=this.blahblah.bind(this);

    }
    blahblah(event){
        event.preventDefault();
        console.log('haha')
    }
    render(){
    return (
        <div>
            <div className='ba br2'>
                <main className="pa4 black-80">
                    <form className="measure center">
                        <fieldset id="Forgot_password" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Forgot password ???</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Enter your Registered Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" id="email-address"
                                    onChange={this.props.onChangeEmail} />
                            </div>
                            <p className="hover-blue" onClick={this.props.changePassRoute}>I have the recovery code!!!</p>
                        </fieldset>
                        <div className="tc">
                            <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={this.props.onSubmitSend}>SEND</button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    )
    }
};

export default ForgotPasswordCode;