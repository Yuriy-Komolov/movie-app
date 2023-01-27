export const debounce = (callback: (...args: any) => void) => {
  let timerId: ReturnType<typeof setTimeout>;

  return function (...args: any) {
    clearTimeout(timerId);

    timerId = setTimeout(callback, 2000, ...args);
  };
};
