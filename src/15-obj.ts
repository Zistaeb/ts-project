(() => {
type Sizes = "S" | "M" | "L" | "XL";
type Product = {
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes,
};

const products: Product[] = [];

const addProduct = (data: Product) => {
      products.push(data);
    };

    addProduct({
      title: 'Product1',
      createdAt: new Date(),
      stock: 15,
    });

    addProduct({
      title: 'Product1',
      createdAt: new Date(),
      stock: 15,
      size: "L",
    });

    console.log(products);
    products.push({
      title: 'Product3',
      createdAt: new Date(),
      stock: 11,
    });
})();
