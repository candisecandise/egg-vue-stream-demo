exports.delay = (number) =>
    new Promise(resolve => {
      setTimeout(resolve, number);
    });
  
  