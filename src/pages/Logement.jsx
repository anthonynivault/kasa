import { useParams } from 'react-router-dom'
import logements from '../data/logements.json'
import Erreur from './Erreur'

function Logement() {
  const { id } = useParams()

  const logement = logements.find((item) => item.id === id)

  if (!logement) {
    return <Erreur />
  }

  return (
    <section>
      <h1>{logement.title}</h1>
      <p>{logement.location}</p>
    </section>
  )
}

export default Logement