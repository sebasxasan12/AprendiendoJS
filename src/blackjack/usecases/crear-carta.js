
/**
 * 
 * @param {String} carta
 * @returns {HTMLImageElement} Elemento img con la carta
 */
export const crearCarta = (carta) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
        imgCarta.classList.add('carta');
        return imgCarta;
}