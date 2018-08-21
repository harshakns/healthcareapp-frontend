import React, { Component } from 'react';
import MultiChatWindowTop from './MultiChatWindowTop.js'
import ChatWindow1 from './ChatWindow1.js'
import 'tachyons'
import './MultiChatWindow.css'

class MultiChatWindow extends Component {
    //data:{name:room, socket=socket.id}
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            homeIndex:-5,
            homeTabColor:'orange'
        }
        this.clickChangeStyle = this.clickChangeStyle.bind(this);
        // this.clickToCreate = this.clickToCreate.bind(this);
        this.clickToDelete = this.clickToDelete.bind(this);
        this.changeHomeIndex=this.changeHomeIndex.bind(this);
    }
    componentDidMount(){
        this.setState({list:this.props.data})
    }
    clickChangeStyle(data) {
        //data = {name:'room'}
        console.log(data);
        let temp = this.props.data
        for (let i of temp) {
            if (i.name === data.name) {
                i.zindex = this.state.list.length + 1
                i.color = 'red'
            } else { i.zindex = 1; i.color = 'blue' }
        }
        this.setState({ list: temp })
    }
    clickToDelete(data) {
        //data ={name:''}
        let temp = this.state.list;
        let temp1 = [];
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].name === data.name) {

            } else {
                temp1.push(temp[i])
            }
        }
        this.setState({ list: temp1, count: this.state.count + 1 })
    }
    changeHomeIndex(data){
        console.log(data)
        if(!(data===undefined)){
            if(this.state.homeIndex<=0){
                this.setState({homeIndex:this.props.data.length+2})
            }else{
                this.setState({homeIndex:0})
            }
        }else{
            this.setState({homeIndex:0})
        }
        console.log(this.state.homeIndex);
    }

    render() {
        //console.log('reached multichat window');

        // console.log(this.props);
        const listItemsTop = this.props.data.map((i, k) => {
            return (
                <MultiChatWindowTop
                    key={i.name}
                    name={i.name}
                    color={i.color}
                    targetName={i.targetName}
                    targetEmail={i.targetEmail}
                    clickChangeStyle={this.clickChangeStyle} clickToDelete={this.clickToDelete}
                    leaveRoom={this.props.leaveRoom}
                    changeHomeIndex={this.changeHomeIndex}

                />)
        })
        const listItemsBottom = this.state.list.map((i, k) => {
            return (
                <ChatWindow1
                    key={i.name}
                    room={i.name}
                    socket = {i.socket}
                    zindex={i.zindex}
                    targetName={i.targetName}
                    targetEmail={i.targetEmail}
                />
            )
        })

        console.log(this.props.data);
        return (

            <div >
                <div className='MultiChatWindowTop'>
                    <div
                        className={`bg-${this.state.homeTabColor} MultiChatWindowTopHome `}
                        onClick={()=>this.changeHomeIndex('harsha')}
                        >
                            Home
                    </div>

                    <div className='MultiChatWindowTopTabs'>
                    {listItemsTop}
                    </div>
                </div>
                
                <div className='MultiChatWindowBottom'>

                    <div 
                    className={`MultiChatWindowBottomHome z-${this.state.homeIndex} `}>
                        <p>welcome to the health friend</p>

                    </div>

                    <div className='MultiChatWindowBottomTabs'>
                    {listItemsBottom}
                    </div>

                </div>
            </div>
        )
    }
}

export default MultiChatWindow;