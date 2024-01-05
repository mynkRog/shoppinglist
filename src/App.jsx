import React from 'react'
import { useState } from 'react'
import "./style.css"

const App = () => {
  const [items, setitems] = useState([])

  const onremoveitem = (itemtoremove) => {
    const newitems = items.filter((item) => {
      return item !== itemtoremove
    })
    setitems(newitems)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const input = form.item
    const newitems = [...items, input.value]
    setitems(newitems)
    form.reset()
  }
  return (
    <>
      <h1>Project 4: Shopping List</h1>
      <div className='shopping-list'>
        <h2>Items To Buy</h2>
        <form onSubmit={onSubmit}>
          <input type="text" name="item" placeholder="Add a new item" required />
          <button>Add</button>
        </form>
        <ul>
          {items.map((item, index) => (
            <Item onremoveitem={onremoveitem} key={item + index} item={item} />
          ))}
        </ul>
      </div>
    </>
  )
}

const Item = ({item, onremoveitem}) => {
  return(
    <li>
      {item}
      <button className='delete' onClick={() => onremoveitem(item)}>x</button>
    </li>
  )
}

export default App