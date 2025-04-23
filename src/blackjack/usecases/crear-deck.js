import _ from 'underscore';

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tipos Ejemplo: ['C','D','H','S']
 * @param {Array<String>} especiales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>}
 */

export const crearDeck = (tipos, especiales) => {

    if (!tipos || tipos.length == 0) throw new Error('Tipo de carta es obligatorio');
    let deck = []
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle(deck);
    return deck;
}