export default function (): void {
  console.log('literal types');

  const helloword = 'Hello World';
  const hiWord = 'Hi World';
  console.log(helloword, hiWord);

  type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';
  class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
      console.log(dx, dy, easing);
    }
  }
  const button = new UIElement();
  button.animate(0, 0, 'ease-in');
  // button.animate(0, 0, 'sdasd');

  // function createElement (tagName: 'img'): HTMLImageElement;
  // function createElement (tagName: 'input'): HTMLInputElement;
  function createElement(tagName: string): HTMLElement {
    console.log('tagName', tagName);
    return new HTMLElement();
  }
  createElement('div');


  function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
    return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
  }
  const result = rollDice();
  console.log('numberic literal types: ', result);

  interface MapConfig {
    lng: number;
    lat: number;
    titleSize: 8 | 16 | 32;
  }
  const chapter: MapConfig = {
    lng: 100,
    lat: 200,
    titleSize: 16
  };
  console.log({...chapter});
}
