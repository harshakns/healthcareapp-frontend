import React,{Component} from 'react'
import 'tachyons'

class Bottom extends Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
        }
    }
    componentDidMount(){
        this.setState({name:this.props.name})
    }
    componentWillUnmount(){
        console.log('ihave unmounted',this.state.name)
    }
    render(){
    return (
        <div className={`w-100 h-100 ba bg-${this.props.color} absolute z-0`} 
        style={{ zIndex: this.props.zIndex }}
        >
        <p>{this.props.name}</p>
        </div>
    )
    }
}

export default Bottom