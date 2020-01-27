import React from 'react'
import './index.css'

const Card = (props) => {
  const { title, description, footer } = props
  return (
    <div className="Card">
      <h1 className='Card-title'>{title}</h1>
      <div className='Card-description'>{description}</div>
      <div className='Card-footer'>{footer}</div>
    </div>
  )
}

export default Card;