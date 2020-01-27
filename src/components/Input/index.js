import React from 'react'

const Input = (props) => {
  const { placeholder, onInputChange, value } = props

  return (
    <div>
      <input placeholder={placeholder} onChange={onInputChange} value={value}/>
    </div>
  )
}

export default Input