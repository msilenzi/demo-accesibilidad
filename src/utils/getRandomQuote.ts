import type { Quote } from '../data/quotes'

import { quotes } from '../data/quotes'
import { getRandomInteger } from './getRandomNumber'
import { sleep } from './sleep'

/**
 * Obtiene una cita aleatoria, simulando una solicitud HTTP.
 *
 * Esta función es asíncrona e introduce deliberadamente un retraso aleatorio
 * (p. ej., entre 500ms y 2000ms) para imitar la latencia de una API real.
 * Es especialmente útil para probar cómo la interfaz de usuario maneja los
 * estados de carga y espera.
 *
 * @returns {Promise<Quote>} Una promesa que se resuelve con un objeto `Quote`
 * seleccionado al azar.
 */
export async function getRandomQuote(): Promise<Quote> {
  await sleep(getRandomInteger(500, 2000))
  return quotes[getRandomInteger(0, quotes.length - 1)]
}
