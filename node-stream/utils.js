export const delay = (number) =>
    new Promise(resolve => {
      setTimeout(resolve, number);
    });
  
  