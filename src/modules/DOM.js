import Streak from './Streak';

const DOM = (() => {
  const activateKey = (keyValue) => {
    const key = document.getElementById(keyValue);
    if (key !== null) key.classList.add('active');
  };

  const deactivateKey = (keyValue) => {
    const key = document.getElementById(keyValue);
    if (key !== null) key.classList.remove('active');
  };

  const keyPop = (value) => {
    const pop = [
      { transform: 'scale(1)' },
      { transform: 'scale(1.2)' },
      { transform: 'scale(1)' },
    ];
    const popTiming = {
      duration: 100,
      iterations: 1,
    };
    const key = document.getElementById(value);
    if (key !== null) key.animate(pop, popTiming);
  };

  const streakJump = () => {
    const jump = [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-10px)' },
      { transform: 'translateY(0)' },
    ];
    const jumpTiming = {
      duration: 100,
      iterations: 1,
    };
    const streak = document.getElementById('streak');
    streak.animate(jump, jumpTiming);
  };

  const streakShake = () => {
    const shake = [
      { transform: 'translateX(0)' },
      { transform: 'translateX(10px)' },
      { transform: 'translateX(-10px)' },
      { transform: 'translateX(10px)' },
      { transform: 'translateX(0)' },
    ];
    const shakeTiming = {
      duration: 200,
      iterations: 1,
    };
    const streak = document.getElementById('streak');
    streak.animate(shake, shakeTiming);
  };

  const updateStreak = () => {
    const streak = document.getElementById('streak');
    streak.textContent = `Streak: ${Streak.get()}`;
  };

  return {
    activateKey,
    deactivateKey,
    updateStreak,
    keyPop,
    streakJump,
    streakShake,
  };
})();

export default DOM;
