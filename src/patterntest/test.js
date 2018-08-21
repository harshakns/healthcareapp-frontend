import React, { Component } from 'react';
import Top from './top.js'
import Bottom from './bottom.js'
import 'tachyons'

class Test extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                { name: 'apple', zindex: 1,color:'blue'},
                { name: 'orange', zindex: 1, color: 'blue' },
                { name: 'tomatoes', zindex: 1, color: 'blue' },
                { name: 'grapes', zindex: 1, color: 'blue' },
                { name: 'mangoes', zindex: 1, color: 'blue' },
                { name: 'pinapple', zindex: 1, color: 'blue'},
                { name: 'mushroom', zindex: 1, color: 'blue'},
                { name: 'papaya', zindex: 1, color: 'blue'},
                { name: 'apple1', zindex: 1, color: 'blue'},
                { name: 'orange1', zindex: 1, color: 'blue' },
                { name: 'tomatoes1', zindex: 1, color: 'blue' },
                { name: 'grapes1', zindex: 1, color: 'blue' },
                { name: 'mangoes1', zindex: 1, color: 'blue' },
                { name: 'pinapple1', zindex: 1, color: 'blue' },
                { name: 'mushroom1', zindex: 1, color: 'blue' },
                { name: 'papaya1', zindex: 1, color: 'blue' }
            ],
            toDelete:''
        }
        this.clickChangeStyle = this.clickChangeStyle.bind(this);
        this.clickToCreate = this.clickToCreate.bind(this);
        this.clickToDelete = this.clickToDelete.bind(this);
    }
    clickChangeStyle(data) {
        //data = {name:'apples'}
        console.log(data);
        let temp=this.state.list
        for(let i of temp){
            if(i.name===data.name){
                i.zindex=this.state.list.length+1
                i.color='orange'
            }else{i.zindex = 1;i.color='blue'}
        }
        this.setState({list:temp})
        }
    clickToCreate(){
        //adds new element to the list
        let newElement = this.state.list;
        newElement.push({name:'paypal',zindex:1,color:'blue'})
        this.setState({list:newElement},()=>this.onClickSend({name:'paypal'}));
        
    }
    clickToDelete(data){
        //data ={name:''}
        let temp = this.state.list;
        console.log(temp);
        let temp1 = [];
        for (let i=0;i<temp.length;i++) {
            if (temp[i].name === data.name) {
                
            }else{
                temp1.push(temp[i])
            }
        }
        console.log(temp1);
        this.setState({ list: temp1,count:this.state.count+1 })
    }
    
    render() {
        const listItemsTop = this.state.list.map((i, k) => {
            return (
                <Top 
                key={i.name} 
                name={i.name} 
                color={i.color}
                clickChangeStyle={this.clickChangeStyle} clickToDelete={this.clickToDelete}
                
                />)
        })
        const listItemsBottom = this.state.list.map((i, k) => {
            return (
                <Bottom 
                key={i.name} 
                name={i.name} 
                color={i.color}
                zIndex={i.zindex} 
                />
            )
        })

        return (
            <div className='App'>
                <div className='w-100 h2 flex relative'>
                    {listItemsTop}
                </div>
                <div className='w-100 h-90 flex '>
                    {listItemsBottom}

                </div>
            </div>
        )
    }
}

export default Test

