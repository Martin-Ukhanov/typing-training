import DOM from './DOM';

const Keyboard = (() => {
  const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let currentKey = keys.charAt(Math.floor(Math.random() * keys.length));

  DOM.activateKey(currentKey);

  const getKey = () => currentKey;

  const changeKey = () => {
    DOM.deactivateKey(currentKey);
    currentKey = keys.charAt(Math.floor(Math.random() * keys.length));
    DOM.activateKey(currentKey);
  };

  return { getKey, changeKey };
})();

export default Keyboard;
