import { useState } from 'react'

export const NameForm = () => {
  const [ name, setName ] = useState('')
  const changeName = () => (e) => setName(e.target.value)

  return (
    <>
      <input
        type='text'
        placeholder='Synthetic Event'
        value={name}
        onChange={changeName()}
      />
      <p>Hola, {name || 'visitante'}</p>
    </>
  )
}