import type { Quote } from '../data/quotes'

import { useCallback, useState } from 'react'

import { getRandomQuote } from '../utils/getRandomQuote'

export function useQuotes() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [quote, setQuote] = useState<Quote | null>(null)

  const changeQuote = useCallback(async () => {
    setIsLoading(true)
    setQuote(await getRandomQuote())
    setIsLoading(false)
  }, [])

  return {
    isLoading,
    quote,
    changeQuote,
  }
}
