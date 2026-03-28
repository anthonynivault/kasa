import { useState } from 'react'
import arrow from '../assets/images/arrow.svg'

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  function toggleCollapse() {
    setIsOpen(!isOpen)
  }

  return (
    <article className="collapse">
      <button className="collapse__header" onClick={toggleCollapse} type="button">
        <span className="collapse__title">{title}</span>
        <img
          className={`collapse__arrow ${isOpen ? 'collapse__arrow--open' : ''}`}
          src={arrow}
          alt=""
          aria-hidden="true"
        />
      </button>

      <div className={`collapse__content ${isOpen ? 'collapse__content--open' : ''}`}>
        <div className="collapse__inner">
          {children}
        </div>
      </div>
    </article>
  )
}

export default Collapse