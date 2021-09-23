export default function functions(): void {
  console.log('functions');

  function add(x: number, y: number): number {
    return x + y;
  }
  const addAgain = (x: number, y: number): number => {
    return x + y;
  };
  console.log(add(1, 2), addAgain(4, 5));

  const anotherAdd: (x: number, y: number) => number = function (
    x: number,
    y: number
  ): number {
    return x + y;
  };
  const anotherAddAgain: (x: number, y: number) => number = (x: number, y: number): number => {
    return x + y;
  };
  console.log(anotherAdd(11, 22), anotherAddAgain(42, 5), anotherAddAgain(2, 3));

  function buildName(fn: string, ln: string = 'Smith', md?: string): string {
    if (md) {
      return fn + md + ln;
    } else {
      return fn;
    }
  }
  const result1 = buildName('Bob'); // error, too few parameters
  const result2 = buildName('Bob', 'Adams', 'Sr.'); // error, too many parameters
  const result3 = buildName('Bob', 'Adams');
  const result4 = buildName('Bob', undefined);
  console.log('optional and default parameters: ', result1, result2, result3, result4);

  function buildNa(fn: string, ...rn: string[]): string {
    return fn + '' + rn.join('');
  }
  const bn: (fn: string, ...rest: string[]) => string = buildNa;
  console.log('rest parameters: ', buildNa('test', 'oo', 'member'), bn('a', 'b', 'c'));

  interface Card {
    suit: string;
    card: number;
  }
  interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
  }
  const deck: Deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function (this: Deck) {
      return () => {
        const pickedCard = Math.floor(Math.random() * 52);
        const pickedSuit = Math.floor(pickedCard / 13);
        return {
          suit: this.suits[pickedSuit],
          card: pickedCard % 13
        };
      };
    }
  };
  const cardPicker = deck.createCardPicker();
  const pickedCard = cardPicker();
  console.log('this and arrow functions: ', `card: ${pickedCard.card} of ${pickedCard.suit}`);

  const suits = ['hearts', 'spades', 'clubs', 'diamonds'];
  function pickCard (x: { suit: string; card: number}[]): number;
  function pickCard (x: number): {suit: string; card: number};
  function pickCard (x: any): any { // eslint-disable-line
    if (typeof x === 'object') {
      const pickedCard = Math.floor(Math.random() * x.length);
      return pickedCard;
    } else if (typeof x === 'number') {
      const pickedSuit = Math.floor(x / 13);
      return {
        suit: suits[pickedSuit],
        card: x % 13
      };
    }
  }
  const myDeck = [
    {
      suit: 'diamonds',
      card: 2
    },
    {
      suit: 'spades',
      card: 10
    },
    {
      suit: 'hearts',
      card: 4
    }
  ];
  const pickedCard1 = myDeck[pickCard(myDeck)];
  console.log(`card: ${pickedCard1.card} of ${pickedCard1.suit}`);
  const pickedCard2 = pickCard(15);
  console.log(`card: ${pickedCard2.card} of ${pickedCard2.suit}`);
}
