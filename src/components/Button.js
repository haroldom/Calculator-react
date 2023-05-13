import React from 'react'
import '../stylesheets/Button.css'

const Button = ({ value, isOp, handleInput}) => {
  return (
    <button 
    className={isOp ? "button-op" : "button-val"}
    onClick={handleInput}
    > {value}</button>
  )
}

export default Button