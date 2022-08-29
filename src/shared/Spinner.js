import React from 'react'
import styles from './Spinner.module.css'
import spinner from '../assets/spinner.gif'

 const Spinner = () => {
  return (
    <div className={styles.loadingSpinnerContainer}>
        <img src={spinner} width="150px" alt="Loading" />
    </div>
  )
}

export default Spinner
