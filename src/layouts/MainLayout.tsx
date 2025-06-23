import { Link, Outlet, useLocation } from 'react-router'

import './MainLayout.css'

export function MainLayout() {
  const location = useLocation()

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
                  <Link to="/" data-active={location.pathname === '/'}>
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/live-demo"
                    data-active={location.pathname === '/live-demo'}
                  >
                    Regiones dinámicas
                  </Link>
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
