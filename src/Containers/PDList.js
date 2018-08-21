import React,{Component} from 'react';
import PDBox from '../Components/PDBox';
import {equals} from 'ramda';


class PDList extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        this.setState({data:this.props.data})
        // console.log(this.props.data);
    }
    componentDidUpdate(){
        if(!equals(this.props.data,this.state.data)){
        this.setState({ data: this.props.data })
        }
    }
    render(){
        // console.log(this.props.data)
        return(
        <div className='PDList'>
            {
                this.props.data.map((item, i) => {
                return <PDBox 
                key={i} 
                name={item.name} 
                email={item.email} 
                online={item.online}
                userRoom={this.props.userRoom}
                onRouteChange={this.props.onRouteChange} 
                createRoom ={this.props.createRoom} 
                leaveRoom = {this.props.leaveRoom} 
                forceRoomJoin={this.props.forceRoomJoin}
                userRoomLink={this.props.userRoomLink}
                userName={this.props.userName}
                userEmail={this.props.userEmail}
                /> 
                })
            }
        }
        </div>
        );
    }
}


export default PDList;