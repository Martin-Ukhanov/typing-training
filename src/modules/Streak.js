const Streak = (() => {
  let streak = 0;

  const get = () => streak;

  const increase = () => {
    streak += 1;
  };

  const reset = () => {
    streak = 0;
  };

  return { get, increase, reset };
})();

export default Streak;
