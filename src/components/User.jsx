import React from 'react'

const User = () => {

  const isGroup = true;
  const chatOpened = "CompSci";
  const avatar = "../../img/three.jpg"
  return (
    
        <div className='user-details'>
            <img src={avatar} alt="" />
            <h4>{chatOpened}</h4>
            {
              isGroup ? "" : 
              <div className='active'>
                
              </div>
            }
        </div>
  )
}

export default User