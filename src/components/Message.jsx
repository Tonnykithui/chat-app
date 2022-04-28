import React from 'react'

const Message = ({m}) => {

  const isGroup = true;
  
  return (
    <div className={m.self ? `message message-right` : `message`}>
        <div className={m.self ? `message-info-right` : `message-info`}>
            {
              isGroup ? <p className='text-sm font-semibold '>{m.User}</p> : ""
            }
            <p>{m.message}</p>
        </div>
        <div className='message-img'>
            <img src={m.img} alt="" className='message-img'/>
        </div>
        
    </div>
  )
}

export default Message