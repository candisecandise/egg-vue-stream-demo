export const delay = (number: number) =>
  new Promise(resolve => {
    setTimeout(resolve, number);
  });

