import React from 'react'
import styles from './Pagination.module.css'

function Pagination({totalLength, postsPerPage, paginate}) {
    const postForNumbers = []

    const setLengthOfNumbers = Math.ceil(Math.floor(totalLength/postsPerPage))

    

    for(let i = 1; i <= setLengthOfNumbers; i++ ) {
        postForNumbers.push(i)
    }

   
    return (
        <div>
            <ul className={styles.list}>
                {postForNumbers.map((item, index) => (
                    <li className={styles.listStyleItem} key={index} >
                        <a href="#" onClick={() => paginate(item)}>{item}</a>
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination
