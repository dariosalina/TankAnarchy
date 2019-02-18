import React from 'react'

export default function Player(props) {
    console.log(props)
    return (
        <div style={{
           position:  'relative',
           top: props.position[1],
           left: props.position[0],
           backgroundColor: 'blue',
           color: 'white',
           width: 40,
           height: 40
        }}>Player</div>
    )
}
 