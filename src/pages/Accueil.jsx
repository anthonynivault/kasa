import logements from '../data/logements.json'
import Banner from '../components/Banner'
import Card from '../components/Card'
import bannerHome from '../assets/images/banner-home.webp'

function Accueil() {
  return (
    <div className="home">
      <Banner
        title="Chez vous, partout et ailleurs"
        image={bannerHome}
        alt="Bannière de la page d’accueil - Paysage avec des montagnes au bord de mer"
        variant="home"
      />

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