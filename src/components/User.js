import React from 'react'

const User = ({ user }) => {
    return (
        <div className= 'task'>
            <h3>{user.firstname} {user.lastname}</h3>
        </div>
    )
}

export default User
