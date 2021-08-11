import React from 'react'
import styles from './style.css'



export const Button = (props) => {
  return <button {...props} >{props.text}</button>
}
