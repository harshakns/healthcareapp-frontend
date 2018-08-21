import React from 'react';
import './Navigation.css';

const Navigation = (props) => {
    //used for navigating between the routes
    //props = {route:,onRouteChange:f,clearState:f}
    console.log(props);
    if(props.route ==='signin'){
        return(
            <div className='nav'>
                <div 
                className='pa2 navLinks' 
                onClick={() => props.onRouteChange('forgotpassword')}
                > 
                Forgot Password
                </div>
                <div 
                className='pa2 navLinks' 
                onClick={() => props.onRouteChange('register')}
                > 
                Register 
                </div>
            </div>
        )
    }else if(props.route ==='register'){
        return(
            <div className='nav'>
                <div 
                className='pa2 navLinks' 
                onClick = {() => props.onRouteChange('forgotpassword')}
                > 
                Forgot Password
                </div>
                <div 
                className='pa2 navLinks' 
                onClick={() => props.onRouteChange('signin')}
                > 
                Sign In 
                </div>
            </div>
        )
    } else if (props.route === 'forgotpassword') {
        return (
            <div className='nav'>
                <div 
                className='pa2 navLinks' 
                onClick={() => props.onRouteChange('signin')}
                > 
                Sign In
                </div>
                <div 
                className='pa2 navLinks' 
                onClick={() => props.onRouteChange('register')}
                > 
                Register 
                </div>
            </div>
        )
    }else if (['admin','patient','doctor'].includes(props.route)) {    
        return(
            <div className='nav'>
                <div 
                className='pa2 navLinks' 
                onClick={() =>{ props.onRouteChange('signin');
                props.clearState();
                //clears the state to orignal state on logout
                }}
                >
                Sign Out
                </div> 
            </div>
        )
    }else{
        return(
            <div className='nav'>
            <div
            className='pa2 navLinks'
            >
            404! error
            </div>
            </div>
        )
    }
}

export default Navigation;