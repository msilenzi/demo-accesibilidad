import { usePageTitleAnnouncer } from '../hooks/usePageTitleAnnouncer'

export function HomePage() {
  usePageTitleAnnouncer('Inicio')

  return (
    <section>
      <h1>Sobre el proyecto</h1>

      <p>
        Este proyecto es una pequeña demostración práctica sobre cómo
        implementar funcionalidades que garanticen la accesibilidad en
        Single-Page Applications (SPA).
      </p>
    </section>
  )
}
