import { useState } from 'react'
import arrow from '../assets/images/arrow.svg'

function Slideshow({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!pictures || pictures.length === 0) {
  return null
}

  const totalSlides = pictures.length
  const hasMultipleSlides = totalSlides > 1

  function goToPrevious() {
    if (currentIndex === 0) {
      setCurrentIndex(totalSlides - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  function goToNext() {
    if (currentIndex === totalSlides - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <section className="slideshow">
      <img
        key={pictures[currentIndex]}
        className="slideshow__image slideshow__image--active"
        src={pictures[currentIndex]}
        alt={title}
      />

      {hasMultipleSlides && (
        <>
          <button
            className="slideshow__button slideshow__button--left"
            type="button"
            onClick={goToPrevious}
            aria-label="Image précédente"
          >
            <img src={arrow} alt="" aria-hidden="true" />
          </button>

          <button
            className="slideshow__button slideshow__button--right"
            type="button"
            onClick={goToNext}
            aria-label="Image suivante"
          >
            <img src={arrow} alt="" aria-hidden="true" />
          </button>

          <p className="slideshow__counter">
            {currentIndex + 1}/{totalSlides}
          </p>
        </>
      )}
    </section>
  )
}

export default Slideshow