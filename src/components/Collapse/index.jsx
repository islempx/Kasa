import { useState } from 'react'
import './Collapse.css'

const Collapse = ({ title, content,id , width}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse" key={id} style={{ width}} >
      
        
      <div className="collapse-header"   onClick={() => setIsOpen(!isOpen)} >
        <h2>{title}</h2>
        <button className="btn">
          <i className={`fa-solid ${isOpen ? 'fa-angle-down' : 'fa-angle-up'}`}></i>
        </button>
      </div>

      <div className={`content ${isOpen && 'open' }`}>
        <p>{content}</p>
      </div>

    </div>
  )
}

export default Collapse