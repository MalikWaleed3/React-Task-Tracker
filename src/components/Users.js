import User from './User'

const Users = ({ users }) => {
    return (
        <>
          {users.map((user) => (
              <User key={user.id} user={user}/>
                ))}  
        </>
    )
}

export default Users
