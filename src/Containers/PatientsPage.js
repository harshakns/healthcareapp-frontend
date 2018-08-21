import React, { Component } from 'react';
import PDList from './PDList';
import './UserPage.css';
import io from 'socket.io-client';
import MultiChatWindow from './MultiChatWindow';


class PatientsPage1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            route: 'chat',
            userId: '',
            userName: '',
            userType: '',
            userEmail: '',
            userJoinDate: '',
            userContactList: [],
            userSocketId: '',
            userRoom: [],
            userRoomLink: {},
            dataToChatWindow: []
        }
        this.socket = io('http://127.0.0.1:3001');
        this.onRouteChange = this.onRouteChange.bind(this);
        this.createRoom = this.createRoom.bind(this);
        this.leaveRoom = this.leaveRoom.bind(this);
        this.forceRoomJoin = this.forceRoomJoin.bind(this);
        this.socket.on('getDetails', () => {
            this.socket.emit('entryStatus', {
                type: this.state.userType,
                email: this.state.userEmail
            })
        })
        this.socket.on('updateStatus', data => {
            for (let person in this.state.userContactList) {
                if (data.includes(this.state.userContactList[person].email)) {
                    this.props.user.contactList[person] = Object.assign(this.props.user.contactList[person], { online: true })
                } else {
                    this.props.user.contactList[person] = Object.assign(this.props.user.contactList[person], { online: false })
                }
            }
            this.setState(
                {
                    userContactList: this.props.user.contactList
                }
            )

        });
        this.socket.on('triggerChat', (data) => {
            console.log('i was triggered');
            console.log(data);
            // this.onRouteChange('chat');
            // this.createRoom(data);
        })

    }
    forceRoomJoin(data) {
        // console.log('i am forcing',data.email)
        this.socket.emit('triggerChat', data)
    }
    onRouteChange(route) {
        // console.log('i changed the route')
        this.setState({ route: route })
    }
    createRoom(data) {
        //data={name:,email:}
        //console.log(data);
        const temp = [this.props.user.email, data.email]
        const room = temp.map(i => { return i.split('@')[0] }).join('!@!@2@!@!')

        this.socket.emit('room', { room: room, fromemail: this.props.user.email, toemail: data.email, type: this.props.user.type, toname: data.name });

        this.socket.on('joined', data => {
            //console.log('they joined me!!');
            const temp11 = this.state.userRoom
            const temp21 = this.state.dataToChatWindow
            const temp22 = this.state.userRoomLink;
            if (!(temp11.includes(data.room))) {
                temp22[data.toemail] = data.room
                temp11.push(data.room);
                temp21.push({ name: data.room, socket: this.socket, zindex: 1, color: 'blue', targetEmail: data.toemail, targetName: data.toname })
                console.log('i have been created')
            }
            console.log(temp21)
            this.setState({ userRoom: temp11, dataToChatWindow: temp21, userRoomLink: temp22 });
        })
    }
    leaveRoom(data) {
        //data={email:}
        let temp = []
        const temp1 = this.state.dataToChatWindow
        this.socket.emit('leaveRoom', { email: data.email })
        for (let i = 0; i < this.state.dataToChatWindow.length; i++) {
            if (data.email === this.state.dataToChatWindow[i].targetEmail) {
                temp = temp1.slice(0, i).concat(temp1.slice(i + 1))
            }
        }
        let temp2 = [];
        const temp3 = this.state.userRoom
        for (let i = 0; i < this.state.userRoom.length; i++) {
            if (this.state.userRoom[i] === this.state.userRoomLink[data.email]) {
                temp2 = temp3.slice(0, i).concat(temp3.slice(i + 1))
            }
        }
        const temp4 = this.state.userRoomLink;
        temp4[data.email] = ""
        //console.log('i have left room')
        console.log(temp)
        this.setState({ dataToChatWindow: temp, userRoom: temp2, userRoomLink: temp4 })
    }

    componentDidMount() {
        const { user } = this.props
        console.log(this.props)
        const temp = this.state.userRoom
        for (let person in this.props.user.contactList) {
            this.props.user.contactList[person] = Object.assign(this.props.user.contactList[person], { online: false })
            temp[this.props.user.contactList[person].email] = '';
        }
        this.setState({
            userId: user.id,
            userName: user.name,
            userType: user.type,
            userEmail: user.email,
            userJoinDate: user.joindate,
            userContactList: user.contactList,
            userSocketId: this.socket.id,
            userRoom: temp
        }, () => {
            this.socket.emit('entryStatus', {
                type: this.state.userType,
                email: this.state.userEmail
            })
        })

    }

    componentWillUnmount() {
        this.socket.emit('exitStatus', {
            email: this.state.useEmail,
            type: this.state.userType
        })

    }
    render() {
        console.log(this.props.user.name)
        return (
            <div className='uContainer'>
                <div className='uLeft '>
                    <div className='uSearch'>
                        <p>search</p>
                    </div>
                    <div className='uList'>
                        <PDList
                            data={this.state.userContactList}
                            onRouteChange={this.onRouteChange}
                            createRoom={this.createRoom}
                            leaveRoom={this.leaveRoom}
                            forceRoomJoin={this.forceRoomJoin}
                            userRoom={this.state.userRoom}
                            userRoomLink={this.state.userRoomLink}
                            userName={this.props.user.name}
                            userEmail={this.props.user.email}
                        />
                    </div>
                </div>
                <div className='uChat'>
                    {(() => {
                        switch (this.state.route) {
                            case 'chat':
                                return (
                                    <MultiChatWindow
                                        className='w-60 pa2'
                                        data={this.state.dataToChatWindow}
                                        leaveRoom={this.leaveRoom}
                                    />
                                );
                            default:
                                return (
                                    <div>
                                        <p>page not found</p>
                                    </div>
                                )
                        }

                    })()}
                </div>
            </div>
        );
    }

}
export default PatientsPage1