import React from 'react'

import styles from './StartPage.module.css'
import MsgContent from '../MsgContent/MsgContent'

const Modal = props =>{
        return(
            <div>
                <div 
                    className={styles.Modal}
                    style={{
                    transform: props.msg ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.msg?'1':'0'
                     }}
                >
                <MsgContent/>
                </div>
            </div>
        )
}

export default React.memo(
    Modal,
    (prevProps,nextProps)=>
        nextProps.msg === prevProps.msg &&
        nextProps.children === prevProps.children
    );