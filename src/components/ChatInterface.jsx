import React from 'react'
import Messages from './Messages'
import UserInfo from './UserInfo'
import UsersList from './UsersList'

const ChatInterface = ({SendMess, mess}) => {
  return (
    <div className='chat-ui'>
        <UsersList />
        <Messages SendMess={SendMess} mess={mess}/>
        <UserInfo />
    </div>
  )
}

export default ChatInterface