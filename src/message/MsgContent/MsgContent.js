import React,{useState} from 'react'

import Send from '../../assets/Send.png'
import Conversation from '../Conversation/Conversation'

const Content= props => {
    const [newConversation,setNewConversation]=useState(false)
    const conversationHandler=()=>{
        setNewConversation(!newConversation)
    }
    return (
        <React.Fragment>
            <div style={{
                width:'100%',
                padding:'30px 40px',
                color:'white',
                fontSize:'20px',
                boxSizing:'border-box',
                borderRadius:'10px',
                backgroundColor:'#7F8AC5',
                fontWeight:'bold'
            }}>
                Hi There
                <p style={{fontWeight:'normal',fontSize:'15px'}}>Hello Ask Us Anything.Share Your Feedback.</p>
            </div>
            {newConversation 
            ? <Conversation/>
            :
            <> 
                <p style={{fontWeight:'bold',fontSize:'20px',color:'black',paddingLeft:'30px',paddingTop:'10px'}}>Start a Conversation</p>
                <p style={{color:'lightgray',fontSize:'15px',paddingLeft:'30px'}}>The team typically replies in a few minutes.</p>
                <div style={{paddingLeft:'30px'}}>
                    <button style={{
                        backgroundColor:'green',
                        borderRadius:'20px',
                        color:'white',
                        padding:'10px 30px',
                        textAlign:'center',
                        fontSize:'15px',
                        cursor:'pointer'
                        }}
                        onClick={conversationHandler}>
                    <div>
                    New Conversation <img src={Send} alt="" height="15px" width="20px"/>
                    </div>
                    </button>
                </div>
            </>
            }
        </React.Fragment>
    )
}

export default Content