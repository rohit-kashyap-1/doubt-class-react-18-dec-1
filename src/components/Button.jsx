import React from 'react'
import styles from './Button.module.css'


export default function Button({type,title}) {
  return (
    <button className={`${styles.button} ${styles.primary} `}>{title}</button>
  )
}
