import React,{Component} from 'react'
import 'tachyons'

//props name item onClickSend
class Top extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
        }

    }
    componentDidMount(){
        this.setState({name:this.props.name})
    }
    render(){
    return(
        <div 
        className={`w5 h2 ba flex items-center justify-around bg-${this.props.color}`}
        >
            <div
            onClick={() => {
                this.props.clickChangeStyle({ name: this.state.name }); console.log(this.props);
            }}
            className='f6 tc'
            >
            {this.state.name}
            </div>
            <div className='w1 h1 grow ph1 pb3'
            onClick={() => {
                this.props.clickToDelete({name:this.state.name});
                console.log('delete me')
            }}>
            X
            </div>

        </div>
    )
    }
}

export default Top