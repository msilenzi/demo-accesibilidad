/**
 * Genera un número entero aleatorio dentro de un rango inclusivo.
 *
 * @param min El límite inferior del rango (incluido).
 * @param max El límite superior del rango (incluido).
 * @returns Un número entero aleatorio entre min y max.
 */
export function getRandomInteger(min: number, max: number): number {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled
}
