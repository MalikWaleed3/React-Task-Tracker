import { useState } from 'react'

const AddUser = ({ addUser }) => {
const [firstname, setFirstname] = useState('')
const [lastname, setLastname] = useState('')

const onSubmit = (e) => {
    e.preventDefault ()

    if(!firstname) {
        alert('Please add First Name')
        return
    }

    addUser({ firstname, lastname})
    setFirstname('')
    setLastname('')
}

    return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>First Name</label>
        <input
          type='text'
          placeholder='Add First Name'
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Last Name</label>
        <input
          type='text'
          placeholder='Add Last Name'
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
    
        <input type='submit' value='Save User' className='btn btn-block' />
    </form>
    )
}

export default AddUser
