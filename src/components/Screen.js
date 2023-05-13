import React from 'react'
import '../stylesheets/Screen.css'

const Screen = ({value}) => {
    return (
        <div className='screen-container'>{value}</div>
    )
}

export default Screen