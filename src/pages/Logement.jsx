import { useParams } from 'react-router-dom'
import logements from '../data/logements.json'
import Erreur from './Erreur'
import Slideshow from '../components/Slideshow'
import Collapse from '../components/Collapse'
import starActive from '../assets/images/star-active.svg'
import starInactive from '../assets/images/star-inactive.svg'

function Logement() {
  const { id } = useParams()

  const logement = logements.find((item) => item.id === id)

  if (!logement) {
    return <Erreur />
  }

  const rating = Number(logement.rating)

  return (
    <section className="logement">
      <Slideshow pictures={logement.pictures} title={logement.title} />

      <div className="logement__header">
        <div className="logement__main-info">
          <h1 className="logement__title">{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>

          <div className="logement__tags">
            {logement.tags.map((tag) => (
              <span key={tag} className="logement__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="logement__side-info">
          <div className="logement__host">
            <p className="logement__host-name">{logement.host.name}</p>
            <img
              className="logement__host-picture"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>

          <div className="logement__rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <img
                key={star}
                className="logement__star"
                src={star <= rating ? starActive : starInactive}
                alt=""
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="logement__collapses">
        <div className="logement__collapse">
          <Collapse title="Description">
            <p>{logement.description}</p>
          </Collapse>
        </div>

        <div className="logement__collapse">
          <Collapse title="Équipements">
            <ul className="logement__equipments">
              {logement.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </section>
  )
}

export default Logement