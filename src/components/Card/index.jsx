import './Card.css'

const Card = ({id,cover,title}) => {
return <div key = {id} className='card' style={{ backgroundImage: `url(${cover})` }}>
          <div className="card-overlay">
                <h2 className='titre-logements-home'>{title}</h2>  
          </div>  
        </div>


}

export default Card