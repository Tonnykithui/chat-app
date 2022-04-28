import React, { useState } from 'react';

const CreateMsg = ({SendMess}) => {

    const [Message, setMsg] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        SendMess(Message);
        console.log(Message);
    }

  return (
    <form onSubmit={handleSubmit} className='msg-input'>
        <div>
            <input type="text" name="" id="" 
            placeholder='Enter Message here'
            className='input'
            value={Message} onChange={e => setMsg(e.target.value)}
            />
            <button type="submit" className='btn'>Send</button>
        </div>
    </form>
  )
}

export default CreateMsg