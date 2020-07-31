import React, { useState } from 'react'

import styles from './Description.module.css'
import BtnImage from '../assets/Sparrow Bird.png'
import StartPage from '../message/StartPage/StartPage'

const Description =(props) => {
    const [show,setShow]=useState(true)
    const cross="X"
    return (
        <div className={styles.desc}>
            <div>Where</div>
            <div>words</div>
            <div>fail,</div>
            <div>Music</div>
            <div>speaks.</div>
            <StartPage msg={!show}/>
            <div style={{paddingLeft:'1200px',paddingTop:'30px'}}>
                <button className={styles.button} onClick={()=>setShow(!show)}>
                    {show ? <img src={BtnImage} alt=""/> : cross }
                </button>
            </div>
        </div>
    )
    
}

export default Description