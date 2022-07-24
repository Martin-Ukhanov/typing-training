import DOM from './DOM';

const Keyboard = (() => {
  const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let currentKey = keys.charAt(Math.floor(Math.random() * keys.length));

  DOM.activateKey(currentKey);

  const getKey = () => currentKey;

  const changeKey = () => {
    DOM.deactivateKey(currentKey);

    let newKey;
    do {
      newKey = keys.charAt(Math.floor(Math.random() * keys.length));
    } while (newKey === currentKey);

    currentKey = newKey;
    DOM.activateKey(currentKey);
  };

  return { getKey, changeKey };
})();

export default Keyboard;
