import React from 'react'

const Card = (props:any) => {
  return (
    <div className='card d-inline-block p-5'>
        <h3 className='title'>{props.title}</h3>
        <p className='description'>{props.description}</p>
    </div>
  )
}

export default Card