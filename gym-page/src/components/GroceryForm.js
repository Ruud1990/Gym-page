import React, { useState } from 'react'

const GroceryForm = (props) => {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });
        setInput('')
    }
  return (
    <form className='grocery-form' onSubmit={handleSubmit}>
        <input type='text' placeholder='add your items to buy' value={input} name='text' className='grocery-input' onChange={handleChange}></input>
        <button className='btn'>Add item</button>
    </form>
  )
}

export default GroceryForm