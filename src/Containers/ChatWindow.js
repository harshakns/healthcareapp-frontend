import React,{Component} from 'react';
import './ChatWindow.css'
import Para from '../Components/Para.js'

class ChatWindow extends Component{
    constructor(props){
        super(props);
        this.state = {
            message:'',
            handle:'',
            history:[],
            counter:0
        }
        this.counter=0
        this.history= []
        this.updateHandle=this.updateHandle.bind(this);
        this.updateMessage=this.updateMessage.bind(this);
    };

    componentWillUpdate(){
        if(!(this.counter===this.props.counter)){
            this.counter=this.props.counter;
            this.setState({counter:this.props.counter},()=>{
                console.log('i have run');
                const message = `${this.props.message.handle} : ${this.props.message.message}`;
                this.history.push(message);
                this.setState({
                    history: this.history,
                });

            })
        }
    }
    componentWillUnmount(){
        this.updateHandle=null;
        this.updateMessage=null;
        this.onClickSend=null;
    }

    updateHandle(event){
        this.setState({handle:event.target.value})
    }
    updateMessage(event){
        this.setState({message:event.target.value})
    }
    
    render(){

    return(
        <div>
            <div id="mario-chat">
                <div id='chat-window'>
                    <div id='chatOutput'>
                        <Para messages={this.state.history} /> 
                    </div>
                </div>
                <div id='chatInput'>
                <div id='feedback'></div>
                <input 
                    id='handle' 
                    type='text' 
                    placeholder='Handle' 
                    onChange = {(event)=>this.updateHandle(event)}
                    />
                <input 
                    id='message' 
                    type='text' 
                    placeholder="Message"
                    onChange = {(event)=>this.updateMessage(event)}
                     />
                <button 
                    id="send"
                    onClick ={()=>{
                    this.props.clickSend({
                        handle:this.state.handle,
                        message:this.state.message
                    })
                    }}
                    >Send</button>
                </div>
            </div>
        </div>
    )
    }
}

export default ChatWindow;