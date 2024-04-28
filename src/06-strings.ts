(()=> {
  let productTitle = 'producto';
  // productTitle = null;
  // productTitle = () => {}
  // productTitle = 123;

  productTitle = 'changed',
  console.log('product', productTitle);


  const productDescription = "I'm bla bla ba bla bl s asasas";
  console.log('productDescription', productDescription);

  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;

  console.log(summary);

  const myString: string = ''
})()
