import React from 'react';

const Para =(props)=>{
    const {messages}=props;
    return(
        <div>
        {
            messages.map((element,i)=>{ return <p key={i}>{element}</p>})
        }
        </div>
    )
}

export default Para;