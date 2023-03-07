import '../styles/Card.css'

const Card = (props:any) => {
  return (
    <div className='card d-inline-block p-5'>
        <h4 className='title'>{props.title}</h4>
        <p className='description'>{props.description}</p>
        <button>Ver más</button>
    </div>
  )
}

export default Card