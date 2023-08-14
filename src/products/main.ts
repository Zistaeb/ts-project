import {addProduct, products, calcStock} from './product-service';

addProduct({
  title: 'Product1',
  createdAt: new Date(),
  stock: 5,
});

addProduct({
  title: 'Product2',
  createdAt: new Date(),
  stock: 6,
  size: "L",
});
console.log(products);
const total = calcStock();
console.log(total);
