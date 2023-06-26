function debounce<T extends any[]>(cb: (...args: T) => void, delay = 250) {
  let timeout: NodeJS.Timeout | undefined;

  return (...args: T) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

export default debounce;
