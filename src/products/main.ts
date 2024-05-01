import { addProduct, calcStock, products} from './product.service'


addProduct({
  title: 'pro1',
  createdAt: new Date(1993, 1, 1),
  stock: 12,
  size: 'S'
})
addProduct({
  title: 'pro1',
  createdAt: new Date(1993, 1, 1),
  stock: 2
})

console.log(products);
const total = calcStock();
console.log(total);
