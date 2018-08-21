import React, { Component } from 'react';
import MultiChatWindowTop from '../Containers/MultiChatWindowTop.js'
import ChatWindow1 from '../Containers/ChatWindow1.js'
import 'tachyons'
import '../Containers/MultiChatWindow.css'
import './AdminChatWindow.css'

class AdminChatWindow extends Component {
    //data:{name:room, socket=socket.id}
    constructor(props) {
        super(props);
        this.state = {
            tabHomeIndex:0,
            tabHomeColor:'blue',
            tabDoctorIndex:0,
            tabDoctorColor:'blue',
            tabPatientIndex:0,
            tabPatientColor:'blue'
        }
        this.clickChangeStyle = this.clickChangeStyle.bind(this);
        this.clickToDelete = this.clickToDelete.bind(this);
        this.changeHomeIndex = this.changeHomeIndex.bind(this);
        this.changeIndex=this.changeIndex.bind(this);
    }
    componentDidMount() {
        this.setState({ list: this.props.data })
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
    changeIndex(data) {
        console.log('i have been pressed');

        if(data==='home'){
            this.setState({
            tabHomeIndex: 3,
            tabHomeColor: 'red',
            tabDoctorIndex: 0,
            tabDoctorColor: 'blue',
            tabPatientIndex: 0,
            tabPatientColor: 'blue'
            })

        }else if(data==='doctor'){
            this.setState({
                tabHomeIndex: 0,
                tabHomeColor: 'blue',
                tabDoctorIndex: 3,
                tabDoctorColor: 'red',
                tabPatientIndex: 0,
                tabPatientColor: 'blue'
            })

        }else if(data==='patient'){
            this.setState({
                tabHomeIndex: 0,
                tabHomeColor: 'blue',
                tabDoctorIndex: 0,
                tabDoctorColor: 'blue',
                tabPatientIndex: 3,
                tabPatientColor: 'red'
            })
        }

    }
    changeHomeIndex(data){
        console.log(data);
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
        const listItemsBottom = this.props.data.map((i, k) => {
            return (
                <ChatWindow1
                    key={i.name}
                    room={i.name}
                    socket={i.socket}
                    zindex={i.zindex}
                    targetName={i.targetName}
                    targetEmail={i.targetEmail}
                />
            )
        })

        console.log(this.props.data);
        return (

            <div>
                <div className='MultiChatWindowRow1'>
                    <div
                        className={`MultiChatWindowRow1Tab z-${this.state.tabHomeIndex} 
                        bg-${this.state.tabHomeColor}`}
                        onClick={() => this.changeIndex('home')}
                    >
                        Home
                    </div>
                    <div
                        className={`MultiChatWindowRow1Tab z-${this.state.tabDoctorIndex} bg-${this.state.tabDoctorColor}`}
                        onClick={() => this.changeIndex('doctor')}
                    >
                        Doctors
                    </div>
                    <div
                        className={`MultiChatWindowRow1Tab z-${this.state.tabPatientIndex} bg-${this.state.tabPatientColor}`}
                        onClick={() => this.changeIndex('patient')}
                    >
                        Patients
                    </div>


                </div>
            
                <div className='MutiChatWindowRow2'>                    
                    <div className='MultiChatWindowRow2'>
                        <div 
                        className={`MultiChatWindowTop absolute z-${this.state.tabDoctorIndex}`}>
                            <div className='MultiChatWindowTopTabs'>
                                {listItemsTop}
                            </div>
                        </div>



                        <div 
                        className={`MultiChatWindowTop absolute z-${this.state.tabPatientIndex}`}>
                        <div className='MultiChatWindowTopTabs'>
                            {listItemsTop}
                        </div>
                        </div>
                    </div>

            </div>


            <div className='MultiChatWindowRow3'>
                <div className={`MultiChatWindowBottom absolute z-${this.state.homeIndex}`}>

                    <div
                        className={`MultiChatWindowBottomHome`}>
                        <p>welcome to the health friend</p>

                    </div>

                </div>


                <div className={`MultiChatWindowBottom absolute z-${this.state.homeIndex}`}>

                    <div className='MultiChatWindowBottomTabs'>
                        {listItemsBottom}
                    </div>

                </div>




                <div className={`MultiChatWindowBottom absolute z-${this.state.homeIndex}`}>

                    <div className='MultiChatWindowBottomTabs'>
                        {listItemsBottom}
                    </div>

                </div>
            </div>
         </div>
        )
    }
}

export default AdminChatWindow;