import type { Quote } from '../data/quotes'

import { useEffect } from 'react'

import { useQuotes } from '../hooks/useQuotes'

import './LiveRegionPage.css'

import { usePageTitleAnnouncer } from '../hooks/usePageTitleAnnouncer'

export function LiveRegionPage() {
  usePageTitleAnnouncer('Ejemplo de Regiones Dinámicas')

  const { isLoading, quote, changeQuote } = useQuotes()

  useEffect(() => void changeQuote(), [changeQuote])

  const loading = isLoading || !quote

  return (
    <section>
      <h1>Ejemplo de regiones dinámicas</h1>
      <p className="live-region__description">
        Esta sección es una pequeña demostración que simula la carga asíncrona
        de elementos en el DOM.
      </p>

      <div
        className="live-region__quote"
        aria-live="polite"
        aria-atomic="true"
        aria-busy={loading}
      >
        {loading ? <Loading /> : <QuoteComponent {...quote} />}
      </div>

      <button
        className="btn btn--primary live-region__btn"
        type="button"
        onClick={() => void changeQuote()}
        disabled={loading}
      >
        Cambiar frase
      </button>
    </section>
  )
}

function QuoteComponent({ quote, author }: Quote) {
  return (
    <figure className="quote">
      <blockquote>
        <p>{quote}</p>
      </blockquote>
      <figcaption>— {author}</figcaption>
    </figure>
  )
}

function Loading() {
  return <p>Cargando...</p>
}
