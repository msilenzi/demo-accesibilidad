import { Link, Outlet } from 'react-router'

export function MainLayout() {
  return (
    <>
      <header>
        <h1>
          <Link to="/">Demo Accesibilidad</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/live-demo">Live Regions</Link>
            </li>
            <li>
              <Link to="/about">Acerca de</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <Outlet />
      </main>

      <footer>
        <p>
          Creado con ♥️ por{' '}
          <a
            href="https://github.com/msilenzi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Manu
          </a>
        </p>
      </footer>
    </>
  )
}
