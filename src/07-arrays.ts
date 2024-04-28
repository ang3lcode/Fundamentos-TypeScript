(()=>{
  let prices = [1,2,3,4,5, 'hola', true];
  // prices.push('asa')
  // prices.push(true)
  // prices.push({})
  prices.push(6);

  let product = ['hola', true];
  product.push(false);

  let mixed: (number | string | boolean | object)[] = ['hola'];
  mixed.push('as');
  mixed.push(true);
  mixed.push([]) // objetos
  mixed.push({})
})()
