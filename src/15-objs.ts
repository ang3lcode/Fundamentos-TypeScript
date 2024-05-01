(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  type product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  const products: product[] = [];

  const addProduct = (data: product) => {
    products.push(data)
  }

  addProduct({
    title: 'pro1',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
    size: 'S'
  })
  console.log(products);
  products.push({
    title: 'pro1',
    createdAt: new Date(1994, 1, 19),
    stock: 12,
    size: 'M'
  })


})();
