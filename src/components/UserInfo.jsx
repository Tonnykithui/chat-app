import React from 'react'
import GroupUserInfo from './GroupUserInfo'
import SingleUserInfo from './SingleUserInfo'

const UserInfo = () => {

  const isGroup = true;
  
  return (
    <div className='wrapper'>
      {
        isGroup ? <GroupUserInfo /> : <SingleUserInfo />
      }
    </div>
  )
}

export default UserInfo