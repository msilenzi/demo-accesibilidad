import { Link, Outlet, useLocation } from 'react-router'

import './MainLayout.css'

import { useRouteChangeFocus } from '../hooks/useRouteChangeFocus'

export function MainLayout() {
  const location = useLocation()
  useRouteChangeFocus()

  return (
    <>
      <SkipLink />
      <PageTitleAnnouncer />
      <div className="site-layout">
        <header className="site-header">
          <div className="container">
            <span className="h3">
              <Link to="/">Demo Accesibilidad</Link>
            </span>
            <nav aria-label="Navegación principal">
              <ul>
                <li>
                  <Link
                    to="/"
                    /**
                     * aria-current="page" informa a las tecnologías de
                     * asistencia que un enlace dentro de un conjunto de
                     * enlaces de navegación apunta a la página actual.
                     */
                    aria-current={
                      location.pathname === '/' ? 'page' : undefined
                    }
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/live-demo"
                    aria-current={
                      location.pathname === '/live-demo' ? 'page' : undefined
                    }
                  >
                    Regiones dinámicas
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main id="main-content" className="site-main container" tabIndex={-1}>
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
              {/* 
                Este texto solo se muestra a los lectores de pantalla y advierte
                a las personas no videntes sobre el comportamiento del enlace
              */}
              <span className="sr-only">(se abre en una nueva pestaña)</span>
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}

/**
 * Muestra un enlace para saltar al contenido principal.
 * Esencial para usuarios de teclado.
 */
function SkipLink() {
  return (
    <a href="#main-content" className="skip-link">
      Ir al contenido principal
    </a>
  )
}

/**
 * Define una live region para anunciar cambios en el título de la página
 * a los usuarios de lectores de pantalla. Está visualmente oculto.
 */
function PageTitleAnnouncer() {
  return (
    <div
      id="page-title-announcer"
      className="sr-only"
      aria-live="polite"
      aria-atomic="true"
    ></div>
  )
}
