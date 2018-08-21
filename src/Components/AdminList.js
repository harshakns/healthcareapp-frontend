import React,{Component} from 'react';
import AList from '../Containers/AList';
import './AdminList.css'

class AdminList extends Component{
    constructor(){
        super()
        this.state={
            doctorZindex:0,
            patientZindex:0,
            doctorSelectedColor: 'grey',
            patientSelectedColor: 'grey',
        }
        this.onSelectTab=this.onSelectTab.bind(this);
    }
    onSelectTab(data){
        if(data==='doctor'){
            this.setState({
                doctorZindex:1,
                patientZindex:0,
                doctorSelectedColor:'blue',
                patientSelectedColor:'grey',
            })

        }else if(data==='patient'){
            this.setState({
                doctorZindex:0,
                patientZindex:1,
                doctorSelectedColor: 'grey',
                patientSelectedColor: 'blue',
            })

        }

    }
    render(){
        console.log(this.props.data);
        return(
        <div>
            <div className='aLinkTabWrapper'>
                <div
                className={`aLinkTab bg-${this.state.doctorSelectedColor} z-${this.state.doctorZindex}`}
                onClick = {()=>this.onSelectTab('doctor')}
                >
                    Doctors
                </div>
                <div
                className={`aLinkTab bg-${this.state.patientSelectedColor} z-${this.state.patientZindex}`}
                onClick={() => this.onSelectTab('patient')}
                >
                    Patients
                </div>
            </div>
            <div className='aListMenu'>
                <div className='aList'>
                    <AList
                        className={`z-${this.state.doctorZindex}`}
                        data={this.props.data}
                        onRouteChange={this.props.onRouteChange}
                        createRoom={this.props.createRoom}
                        leaveRoom={this.props.leaveRoom}
                        forceRoomJoin={this.props.forceRoomJoin}
                        userRoom={this.props.userRoom}
                        userRoomLink={this.props.userRoomLink}
                        userName={this.props.userName}
                        userEmail={this.props.userEmail}
                    />
                </div>

                <div className='aList'>
                    <AList
                        className={`z-${this.state.patientZindex}`}
                        data={this.props.data}
                        onRouteChange={this.props.onRouteChange}
                        createRoom={this.props.createRoom}
                        leaveRoom={this.props.leaveRoom}
                        forceRoomJoin={this.props.forceRoomJoin}
                        userRoom={this.props.userRoom}
                        userRoomLink={this.props.userRoomLink}
                        userName={this.props.userName}
                        userEmail={this.props.userEmail}
                    />
                </div>
            </div >
        </div>

        );

    }
}
export default AdminList;