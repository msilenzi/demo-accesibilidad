import { useEffect, useRef } from 'react'

import { useLocation } from 'react-router'

/**
 * Mueve el foco al elemento principal del contenido en cada cambio de página,
 * omitiendo la carga inicial de la página.
 */
export function useRouteChangeFocus() {
  const location = useLocation()
  const isInitialMount = useRef(true)

  useEffect(() => {
    // Si es el montaje inicial, lo marcamos como falso y no hacemos nada.
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }

    // En próximas navegaciones, movemos el foco.
    const timer = setTimeout(() => {
      const targetElement = document.getElementById('main-content')
      if (targetElement) targetElement.focus()
    }, 100)

    return () => clearTimeout(timer)
  }, [location.pathname]) // Se ejecuta cada vez que cambia la ruta.
}
