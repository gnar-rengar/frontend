import txt from './filters.txt';

/**
 * `interval(ms)` 간격으로 쓰로틀링
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

type PlainObject = { [key in string]: any };
/**
 * 객체의 키를 기준으로 정렬
 */
const sortByKey = (obj: PlainObject, order: 'asc' | 'desc' = 'desc') =>
  Object.keys(obj)
    .sort((a, b) => (order === 'asc' ? b.localeCompare(a) : a.localeCompare(b)))
    .reduce((prev, key) => {
      // eslint-disable-next-line no-param-reassign
      prev[key] = obj[key];

      return prev;
    }, {} as PlainObject);

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

const separateStringInNumber = (str: string) => +str.match(/\d/g).join('');

const badWordFilter = (() => {
  const filter = new RegExp(txt.replace(/\r\n/g, '|'));

  return (str: string) => {
    const result = str.replace(filter, (substr) => '*'.repeat(substr.length));
    return result === str ? str : result;
  };
})();

export { throttle, sortByKey, useTimer, separateStringInNumber, badWordFilter };
