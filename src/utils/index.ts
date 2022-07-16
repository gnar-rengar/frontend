/**
 * @param cb: 쓰로틀링할 콜백 함수
 * @param interval: 쓰로틀링 간격. ms 단위
 */
const throttle = (cb: Function, interval: number) => {
  let throttling = false;

  return () => {
    if (throttling) return;
    throttling = true;
    cb();

    setTimeout(() => {
      throttling = false;
    }, interval);
  };
};

export { throttle };
