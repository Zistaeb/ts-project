(() => {
  let productTitle = 'My amazing product';
  productTitle = 'My amazing product changed';
  console.log('productTitle', productTitle);

  const productDescription = "I'm bla bla bla";
  console.log('productDescription', productDescription);

  let productPrice = 100;
  let isNew: boolean = false;

  const sumary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;

  console.log(sumary);
})();
