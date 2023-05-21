import './FormStyle.css'
import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type='text'></input>

            <label>Email</label>
            <input type='text'></input>
           
            <label>Subject</label>
            <input type='text'></input>

            <label>Massage</label>
           <textarea rows="6" placeholder='Type your massage here'/>
           <butto className="btn">Submit</butto>
        </form>
    </div>
  )
}

export default Form







