
import { crearCarta } from "./crear-carta.js";
import { pedirCarta } from "./pedir-carta.js";
import { valorCarta } from "./valor-carta.js";

/**
 * 
 * @param {Number} puntosMinimos 
 * @param {HTMLElement} puntosHTML
 * @param {HTMLElement} divCartasComputadora
 * @param {Array<String>} deck 
 */

export const turnoComputadora = (puntosMinimos, deck = [], puntosHTML, divCartasComputadora) => {

    if (!puntosMinimos) throw new Error('Puntos mínimos son necesarios');
    if (!deck || deck.length === 0) throw new Error('Deck es necesario');
    if (!puntosHTML) throw new Error('Argumento puntosHTML es necesario');

    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;
        const imgCarta = crearCarta(carta)
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}