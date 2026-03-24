import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Layout() {
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <div className="container-footer">
        <Footer />
      </div>
    </>
  )
}

export default Layout