import React,{Component} from 'react'
import 'tachyons'
import './MultiChatWindowTop.css'

//props name item onClickSend
class MultiChatWindowTop extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
        }

    }
    componentDidMount(){
        this.setState({name:this.props.name,targetName:this.props.targetName})
    }
    render(){
        console.log(this.props);
    return(
        <div 
        className={`ChatTabButtonWrapper bg-${this.props.color}`}
        >
            <div 
            onClick={() => {
                this.props.clickChangeStyle({ name: this.state.name }); console.log(this.props);
                this.props.changeHomeIndex();
            }}
            className='ChatTabButton'
            >
            {this.props.targetName}
            </div>
            
            <div className='ChatTabButtonExit'
            onClick={() => {
                this.props.clickToDelete({name:this.state.name});
                console.log('delete me')
                this.props.leaveRoom({email:this.props.targetEmail})
            }}>
            X
            </div>

        </div>
    )
    }
}

export default MultiChatWindowTop;