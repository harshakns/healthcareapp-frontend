import React,{Component} from 'react'
import './PDBox.css'

class PDBox extends Component{
    constructor(props){
        super(props);
        this.state={
            user:{
                email:'',
                name:'',
                online:''
            },
            route:'chat',
            count:0,
            
        
        }
        this.count=0
        this.onRouteChange = this.onRouteChange.bind(this);
    }
    onRouteChange = (route)=>{
        this.setState({route:route})
    }
    componentDidMount(){
        // console.log(this.props);

        this.setState({
            user:{
                name:this.props.name,
                email: this.props.email,
                online:this.props.online
            }
            
        })
    }
    componentDidUpdate(prevProps){
        // console.log('i was here')
        if(!(this.state.user.online===this.props.online)){
            this.setState({
                user: {
                    name: this.props.name,
                    email: this.props.email,
                    online: this.props.online
                }
            })
        }
        //console.log(this.props.userRoomLink[this.state.user.email]);
        if((this.props.userRoomLink[this.state.user.email]===undefined) ||(this.props.userRoomLink[this.state.user.email]=== "")){
            if(this.count===0){
            //console.log('i passed the condition 1',this.state.user.email)
            this.onRouteChange('chat')
            this.count=1
            }
            // this.setState({count:1})
        
        }else if((this.count===1)&&(!(this.props.userRoomLink[this.state.email]===""))){
            this.onRouteChange('exitChat')
            // this.setState({count:0})
            this.count=0
        }
    }
    
    
    render(){
        // console.log(this.props.userRoomLink[this.state.user.email]);
        // console.log(this.state.user.email)
        
    return(
        <div className='PDBoxWrapper'>
            <div 
            className='PDBoxName'>{this.props.name}
            </div>
            
            <div className='PDBoxStatus'>
                {(()=>{
                    if(this.state.user.online){
                        return(
                        <div className='h1 w1 ba br-100 bg-green'></div>);
                    }else{return(<div className='h1 w1 ba br-100 bg-red'>

                </div>)}
                })()}
                
                {(()=>{
                    if(this.state.route==='chat'){
                        return( 
                        <button
                        className='ph3'
                        onClick={
                            () => {
                                // this.props.onRouteChange('chat');
                                this.props.createRoom({email:this.state.user.email,name:this.state.user.name});
                                this.onRouteChange('exitChat')
                                this.props.forceRoomJoin({ email: this.props.userEmail, name:this.props.userName});
                                
                            }
                        }
                        >chat
                        </button>
                        )
                    }
                    
                    else if (this.state.route === 'exitChat'){
                        return(
                        <button 
                        className='ph3'
                        onClick = {
                            ()=>{
                                // this.props.onRouteChange('home');
                                this.props.leaveRoom({email:this.state.user.email});
                                this.onRouteChange('chat');
                                
                            }
                        }
                        >exit
                        </button>
                        )
                    }
                })()} 
            </div>


        </div>
    )
    }
}

export default PDBox;