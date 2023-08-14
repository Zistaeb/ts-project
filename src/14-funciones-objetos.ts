(() => {
  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password);
};

//login('nina@gmail.com', "abc");
login({
  email: 'nina@gmail.com',
  password: 123,
});

type Sizes = "S" | "M" | "L" | "XL";

const products: any[] = [];

const addProduct = (data: {
      title: string,
      createdAt: Date,
      stock: number,
      size?: Sizes,
    }) => {
      products.push(data);
    };

    addProduct({
      title: 'Product1',
      createdAt: new Date(),
      stock: 15,
    });
    console.log(products);
})();
