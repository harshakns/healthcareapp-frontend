import React from 'react'

const ABox = (props) => {
    return (
        <div className='h3 w5 tc bg-blue pv2 ph2 flex justify-around'>
            <div className='w-auto pa2'>{props.name}</div>
            <button className='ph3 br2'>Remove</button>
        </div>
    )
}

export default ABox;