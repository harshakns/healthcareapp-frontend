import React from 'react';
import PDBox from '../Components/PDBox';
//import {equals} from 'ramda';


const AList=(props)=>{
        console.log(props.data)
        return(
        <div className='PDList'>
            {
                props.data.map((item, i) => {
                return <PDBox 
                key={i} 
                name={item.name} 
                email={item.email} 
                online={item.online}
                userRoom={props.userRoom}
                onRouteChange={props.onRouteChange} 
                createRoom ={props.createRoom} 
                leaveRoom = {props.leaveRoom} 
                forceRoomJoin={props.forceRoomJoin}
                userRoomLink={props.userRoomLink}
                userName={props.userName}
                userEmail={props.userEmail}
                /> 
                })
            }
        </div>
    );
}



export default AList;