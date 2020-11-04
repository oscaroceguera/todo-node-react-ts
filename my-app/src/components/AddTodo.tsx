import React, { useState } from 'react';

type Props = {
  saveTodo: (formData: ITodo | any) => void
}

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<ITodo | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>) : void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value
    })
  }

  const save = (e: React.FormEvent): void => {
    e.preventDefault()
    saveTodo(formData)
  }

  return (
    <form className='Form' onSubmit={save}>
      <div>
        <div>
          <label htmlFor='name'>Name</label>
          <input onChange={handleForm} type='text' id='name' />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <input onChange={handleForm} type='text' id='description' />
        </div>
      </div>
      <button disabled={formData === undefined} >Add Todo</button>
    </form>
  )
}

export default AddTodo
