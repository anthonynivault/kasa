import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from '../pages/Accueil'
import Apropos from '../pages/Apropos'
import Logement from '../pages/Logement'
import Erreur from '../pages/Erreur'
import Layout from '../layouts/Layout'

function Router() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default Router