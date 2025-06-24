import { useEffect } from 'react'

/**
 * Actualizar el título del documento y lo anuncia.
 * @param title El nuevo título de la página.
 */
export function usePageTitleAnnouncer(title: string) {
  useEffect(() => {
    const fullTitle = `${title} | Demo Accesibilidad`
    const announcer = document.getElementById('page-title-announcer')

    document.title = fullTitle
    if (announcer) announcer.textContent = fullTitle

    // Eliminamos el contenido para que no siga apareciendo a los
    // dispositivos de asistencia:
    setTimeout(() => {
      if (announcer) announcer.textContent = ''
    }, 500)
  }, [title])
}
