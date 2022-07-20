function useTimer(cb: (args: void) => void, interval: number) {
  let timer: NodeJS.Timeout = null;

  const setTime = () => {
    timer = setTimeout(cb, interval);
  };

  const clearTime = () => {
    clearTimeout(timer);
    timer = null;
  };

  return [setTime, clearTime];
}

export default useTimer;
