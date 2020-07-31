import React,{useEffect,useState} from 'react'
import axios from 'axios'

import SendBlack from '../../assets/sendblack.png'
import SparrowFavicon from '../../assets/sparrow favicon.png'

const Conversation= props =>{
    const [advice,setAdvice]=useState()
    const [replyMsg,setReplyMsg]=useState()
    const [click,setCLick]=useState(false)

    useEffect(()=>{
        axios.get('https://api.adviceslip.com/advice')
            .then(response=>{
                setAdvice(response.data.slip.advice)
            })
            .catch(error => {
                alert(error)
            })
    },[])

    const msgContentHandler=(event)=>{
        setReplyMsg(event.target.value)
    }

    const msgSendHandler=()=>{
        setCLick(!click)
    }

    return (
        <div>
        <div style={{
            color:'black',
            fontWeight:'normal',
            fontSize:'15px',
            boxSizing:'border-box',
            borderBottomRightRadius:'50px',
            backgroundColor:'lightgray',
            margin:'28px',
            padding:'10px',
            
        }}>{advice}</div>
        {
            click ? <div style={{
                color:'white',
                fontWeight:'normal',
                fontSize:'15px',
                boxSizing:'border-box',
                borderTopLeftRadius:'50px',
                backgroundColor:'#4C5AA1',
                margin:'28px',
                paddingLeft:'30px',
                paddingTop:'10px',
                paddingBottom:'10px'
                
            }}>{replyMsg}</div> : null
        }
        <img src={SparrowFavicon} width="20px" height="20px" alt="" style={{marginLeft:'110px'}}/>
        <span style={{color:'lightgray',fontSize:'12px',paddingLeft:'8px'}}>we run on surveysparrow<hr/></span>
                <input 
                    type="text" 
                    placeholder="Write a reply..." 
                    style={{border:'none',
                            width:'75%',
                            fontSize:'15px'}} 
                    value={replyMsg}
                    onChange={msgContentHandler}/>
                <button  onClick={msgSendHandler} style={{border:'none',backgroundColor:'white',cursor:'pointer'}}>
                    <img src={SendBlack} alt="Send"/>
                </button>
        </div>
    )
}

export default Conversation