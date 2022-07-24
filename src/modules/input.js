import DOM from './DOM';
import Keyboard from './Keyboard';
import Streak from './Streak';

const initializeInput = () => {
  document.addEventListener('keydown', (e) => {
    DOM.keyPop(e.key.toUpperCase());
    if (e.key.toUpperCase() === Keyboard.getKey()) {
      Keyboard.changeKey();
      Streak.increase();
      DOM.updateStreak();
      DOM.streakJump();
    } else if (Streak.get() !== 0) {
      Streak.reset();
      DOM.updateStreak();
      DOM.streakShake();
    }
  });
};

export default initializeInput;
