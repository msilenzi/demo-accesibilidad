import { Link, Outlet } from 'react-router'

import './MainLayout.css'

export function MainLayout() {
  return (
    <>
      <SkipLink />
      <div className="site-layout">
        <header className="site-header">
          <div className="container">
            <h1 className="h3">
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
          </div>
        </header>

        <main id="main-content" className="site-main container">
          <Outlet />
        </main>

        <footer className="site-footer">
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
      </div>
    </>
  )
}

/**
 * Componente que muestra un enlace para saltar al contenido principal.
 * Esencial para usuarios de teclado.
 */
function SkipLink() {
  return (
    <a href="#main-content" className="skip-link">
      Ir al contenido principal
    </a>
  )
}
