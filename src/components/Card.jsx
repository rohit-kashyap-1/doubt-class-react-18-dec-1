import React from 'react'
import styles from './Card.module.css'
import Button from './Button'

export default function Card({content}) {
  return (
    <div className={`${styles.card} ${styles.cardDark}`}>
        <p>{content}</p>
        <Button type="primary" title="Explore More" />
    </div>
  )
}
