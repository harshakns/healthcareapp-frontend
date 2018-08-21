import React from 'react';
import 'tachyons';

const ForgotPasswordCode2 =(props)=>{

    return(
        <div>
            <div className='ba br2'>
                <main className="pa4 black-80">
                    <form className="measure center" type="post">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Enter the details for password recovery!!!</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Enter your Registered Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address"
                                    onChange={(event) => {props.onChangeEmail(event)}} />
                            </div>
                        </fieldset>

                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-code">Enter your code</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-code" id="email-code"
                                onChange={(event) => props.onChangeCode(event)}
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-password">Enter your new password</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" name="email-password" id="email-password"
                                onChange={(event) => props.onChangePassword(event)}
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-password2">ReEnter your new password</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" name="email-password2" id="email-password2"
                                onChange={(event) => props.onChangePassword2(event)}
                            />
                        </div>
                        <p>{props.passwordsCompare}</p>
                        <div className="tc">
                            <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={(event) => { props.onSubmitSend2(event) }}>SEND</button>
                        </div>
                    </form>                    
                </main>
            </div>
        </div>
    )
};

export default ForgotPasswordCode2;