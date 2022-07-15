/**
 * @param cb: 쓰로틀링할 콜백 함수
 * @param interval: 쓰로틀링 간격. ms 단위
 */
const throttle = (cb: Function, interval: number) => {
  let running = false;

  return () => {
    if (running) return;
    running = true;
    cb();

    setTimeout(() => {
      running = false;
    }, interval);
  };
};

export { throttle };
