/**
 * Simula una pausa en la ejecución.
 * @param ms Milisegundos a esperar.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
