export const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const fetcher = <T>(url: string): Promise<T> =>
  fetch(url).then((res) => res.json());
