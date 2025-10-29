
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem } from '../features/ListSlice'

export default function ListComponent() {
  const items = useSelector(s => s.list)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')

  function openInput() {
    setOpen(true)
    setText('')
  }

  function confirmAdd() {
    const name = String(text).trim()
    if (!name) return
    dispatch(addItem({ id: Date.now(), name }))
    setOpen(false)
    setText('')
  }

  function cancel() {
    setOpen(false)
    setText('')
  }

  function remove(id) {
    dispatch(removeItem(id))
  }

  return (
    <section>
      <h2>Shared List</h2>
      {!open && <button onClick={openInput}>Add Item</button>}
      {open && (
        <div>
          <input value={text} onChange={e => setText(e.target.value)} />
          <button onClick={confirmAdd}>Add</button>
          <button onClick={cancel}>Cancel</button>
        </div>
      )}
      <ul>
        {items.map(i => (
          <li key={i.id}>
            {i.name} <button onClick={() => remove(i.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </section>
  )
}