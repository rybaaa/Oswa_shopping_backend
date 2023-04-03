import { allProducts, ProductsType } from './products-repository';

import { v4 as uuidv4 } from 'uuid';

const productsInCart: ProductsType[] = [
  {
    id: uuidv4(),
    title: 'pajama ODH',
    price: 120,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    currentSize: 'S',
    color: ['black', 'white', 'red', 'green', 'blue'],
    currentColor: 'black',
    quantity: 1,
  },
];

export const cartRepository = {
  getCartProducts() {
    return productsInCart;
  },
  addCartProduct(id: string) {
    const newProductInCart = allProducts.find((pr) => pr.id === id);
    if (newProductInCart) {
      productsInCart.push(newProductInCart);
      return newProductInCart;
    } else {
      return undefined;
    }
  },
  removeProductFromCart(id: string) {
    for (let i = 0; i < productsInCart.length; i++) {
      if (productsInCart[i].id === id) {
        productsInCart.splice(i, 1);
        return true;
      }
    }
    return false;
  },
  updateProductDetailsFromCart(id: string, size?: string, color?: string) {
    const product = productsInCart.find((u) => u.id === id);
    if (product) {
      if (size) {
        product.currentSize = size;
      }
      if (color) {
        product.currentColor = color;
      }
      return product;
    } else {
      return false;
    }
  },
};
