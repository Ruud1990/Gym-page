import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import GroceryForm from '../components/GroceryForm';
import GrocerySingleItem from '../components/GrocerySingleItem';

const GroceryList = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    if(!item || /^\s*$/.test(item.text)) {
      return;
    }

    const newItems = [item, ...items];

    setItems(newItems);
  }


  const removeItem = (id) => {
    const removeArr = [...items].filter(item => item.id !== id)

    setItems(removeArr)
  };


  const editItem = (itemId, newValue) => {
    if(!newValue || /^\s*$/.test(newValue.text)) {
      return;

    }
    setItems(prev => prev.map(item => item.id === itemId ? newValue : item))

}

  const completeItem = (id) => {
    let updatedItems = items.map(item => {
      if (item.id === id) {
        item.isComplete = !item.isComplete
      }
      return item;
    });
    setItems(updatedItems);
  }

  return (
    <section className='hero grocery-wrapper'>
    <h2 className='grocery-title'>Grocery List</h2>
        <Link to="/groceryList"></Link>
        <GroceryForm onSubmit={addItem}/>
        <GrocerySingleItem items={items} completeItem={completeItem} removeItem={removeItem} editItem={editItem}/>
    </section>
  )
}

export default GroceryList