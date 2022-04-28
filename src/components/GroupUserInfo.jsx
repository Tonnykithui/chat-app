import React from 'react'

const GroupUserInfo = () => {

    const users = [
        {
            id:2,
            avatar:"../../img/three.jpg",
            Name:"Milly Ohtis"
        },
        {
            id:3,
            avatar:"../../img/three.jpg",
            Name:"Khan Marley"
        },
        {
            id:4,
            avatar:"../../img/three.jpg",
            Name:"Rick Sanches"
        },
        {
            id:5,
            avatar:"../../img/three.jpg",
            Name:"Ricked Rickiest Rick"
        }
    ]
  return (
    <div>
        <h2 className='group-header'>Group Members</h2>
        {
            users.map((user, index) => {
                return(
                    <div key={user.id} className='group-list'>
                        <img src={user.avatar} alt="person" />
                        <p>{user.Name}</p>
                    </div>
                );
            })
        }
    </div>
  )
}

export default GroupUserInfo