import { useState } from 'react'

const Collapse = ({ title, content, id, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`collapse ${className}`} key={id}>
      
      <div 
        className="collapse-header"   
       
      >
        <h2 className='title-collapse'>{title}</h2>
        
        <button className="btn" onClick={() => setIsOpen(!isOpen)}>
          <i className={`fa-solid ${isOpen ? 'fa-angle-down' : 'fa-angle-up'}`}></i>
        </button>
      </div>

      <div className={`content ${isOpen ? 'open' : ''}`}>
        {content}
      </div>

    </div>
  )
}

export default Collapse