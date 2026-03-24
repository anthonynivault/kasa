import logements from '../data/logements.json'
import Banner from '../components/Banner'
import Card from '../components/Card'

function Accueil() {
  return (
    <div className="home">
      <Banner />

      <section className="home__cards">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </div>
  )
}

export default Accueil