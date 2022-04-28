import React, { useEffect, useRef } from 'react'
import CreateMsg from './CreateMsg';
import Message from './Message'
import User from './User'

const Messages = ({SendMess, mess}) => {

  const msgRef = useRef();

  useEffect(() => {
    if(msgRef && msgRef.current){
      const { scrollHeight, clientHeight } = msgRef.current;

      msgRef.current.scrollTo({
        left:0, top:scrollHeight - clientHeight,
        behavior:"smooth" 
      });
    }
  }, [mess]);

  return (
    <div className='messages'>
        <div className='wrapper'>
           <User />
           <div className='messages-container' ref={msgRef}>
             {
               mess.map((m, index) => {
                 return(
                   <>
                     <Message m={m} key={index}/>
                   </>
                 )
               })
             }
           </div>
           <CreateMsg SendMess={SendMess}/>
        </div>
    </div>
  )
}

export default Messages

        
               {/* <Message mess={mess}/>
               <Message mess={mess}/>
               <Message id={id} mess={mess}/>
               <Message mess={mess}/>
               <Message mess={mess}/>
               <Message id={id} mess={mess}/>
               <Message mess={mess}/> */}

               /* const mess = [
    {
      id:2,
      self:true,
      message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      img:"../../img/three.jpg",
      sender:"Tonny Kithui"
    },
    {
      id:3,
      self:true,
      message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      img:"../../img/three.jpg",
      sender:"Tonny Kithui"
    },
    {
      id:4,
      self:false,
      message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      img:"../../img/three.jpg",
      sender:"Tonny Kithui"
    },
    {
      id:3,
      self:true,
      message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      img:"../../img/three.jpg",
      sender:"Tonny Kithui"
    },
    {
      id:4,
      self:false,
      message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      img:"../../img/three.jpg",
      sender:"Tonny Kithui"
    },
    {
      id:3,
      self:true,
      message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      img:"../../img/three.jpg",
      sender:"Tonny Kithui"
    },
    {
      id:4,
      self:false,
      message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      img:"../../img/three.jpg",
      sender:"Tonny Kithui"
    },
    {
      id:3,
      self:true,
      message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      img:"../../img/three.jpg",
      sender:"Tonny Kithui"
    },
    {
      id:4,
      self:false,
      message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      img:"../../img/three.jpg",
      sender:"Tonny Kithui"
    }
  ]; */