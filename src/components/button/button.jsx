import React from 'react'
import style from './button.module.css'

const Button = ({ text, onClick, className }) => (
  <button className={`${style.button} ${className}`} onClick={onClick}>
    {text}
  </button>
)

export default Button
