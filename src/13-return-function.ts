(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  };

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  };

  //const rta = calcTotal([1,2,3,4,5]);
  printTotal([1,2,3,4,5]);             // las funciones que no retornan nada son de tipo void
  //console.log(rta);
})();
