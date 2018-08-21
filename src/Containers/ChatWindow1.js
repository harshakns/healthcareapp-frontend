import React, { Component } from 'react';
import './ChatWindow.css'
import Para from '../Components/Para.js'

class ChatWindow1 extends Component {
    //props = room,socket
    constructor(props) {
        super(props);
        this.state = {
            inputHandle:'',
            inputMessage:'',
            history:[]
        }
        
        this.counter = 0
        this.history = []
        this.updateHandle = this.updateHandle.bind(this);
        this.updateMessage = this.updateMessage.bind(this);
        this.onClickSend=this.onClickSend.bind(this);
        this.props.socket.on('chat',data=>{
            if(data.room===this.props.room){
                const message = `${data.handle} : ${data.message}`;
                this.history.push(message);
                this.setState({
                    history: this.history,
                })
            }    
        })
    }
    componentDidUpdate(prevProps) {
        if (prevProps.isMounted && !this.props.isMounted) {
            setTimeout(
                () => this.setState({ shouldRender: false }),
                500
            );
        }
    }
    componentWillUnmount() {
        this.updateHandle = null;
        this.updateMessage = null;
        this.onClickSend = null;
    }

    updateHandle(event) {
        this.setState({ inputHandle: event.target.value })
    }
    updateMessage(event) {
        this.setState({ inputMessage: event.target.value })
    }
    onClickSend(data){
        this.props.socket.emit('chat',data)
    }

    render() {
        //console.log(this.props);
        return (
            <div className='absolute'
            style={{ zIndex: this.props.zindex }}
            >
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
                            onChange={(event) => this.updateHandle(event)}
                        />
                        <input
                            id='message'
                            type='text'
                            placeholder="Message"
                            onChange={(event) => this.updateMessage(event)}
                        />
                        <button
                            id="send"
                            onClick={() => {
                                this.onClickSend({
                                    room:this.props.room,
                                    handle: this.state.inputHandle,
                                    message: this.state.inputMessage
                                })

                            }}
                        >Send</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatWindow1;