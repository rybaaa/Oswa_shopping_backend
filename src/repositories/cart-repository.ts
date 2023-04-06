import { allProducts, ProductItemType } from './products-repository';

import { v4 as uuidv4 } from 'uuid';

const productsInCart: ProductItemType[] = [
  {
    id: uuidv4(),
    category: 'clothes',
    title: 'pajama ODH',
    price: 120,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    currentSize: 'S',
    color: ['black', '#d7c6c6', 'red', 'green', 'blue'],
    currentColor: '#d7c6c6',
    quantity: [1, 2, 3, 4, 5],
    currentQuantity: 1,
    image:
      'https://raw.githubusercontent.com/rybaaa/Oswa-shopping/master/src/assets/productsInCart/pajama%20ODH.png',
  },
  {
    id: uuidv4(),
    category: 'clothes',
    title: 'pajama ST',
    price: 140,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    currentSize: 'S',
    color: ['black', '#d7c6c6', 'red', '#9a7da4', 'blue'],
    currentColor: '#9a7da4',
    quantity: [1, 2, 3, 4, 5],
    currentQuantity: 1,
    image:
      'https://raw.githubusercontent.com/rybaaa/Oswa-shopping/master/src/assets/productsInCart/pajamaST.png',
  },
  {
    id: uuidv4(),
    category: 'perfume',
    title: 'perfume OT',
    price: 520,
    sizes: ['5ml', '10ml', '15ml'],
    currentSize: '5ml',
    quantity: [1, 2, 3, 4, 5],
    currentQuantity: 1,
    image:
      'https://raw.githubusercontent.com/rybaaa/Oswa-shopping/master/src/assets/productsInCart/chanel.png',
  },
];

export const cartRepository = {
  getCartProducts() {
    return productsInCart;
  },
  addCartProduct(id: string, title: string) {
    const requiredItem = allProducts.find((it) => it.title === title);
    if (requiredItem) {
      const newProductInCart = requiredItem.items.find((pr) => pr.id === id);
      if (newProductInCart) {
        productsInCart.push(newProductInCart);
        return newProductInCart;
      } else {
        return undefined;
      }
    } else return undefined;
  },
  removeProductFromCart(id: string) {
    for (let i = 0; i < productsInCart.length; i++) {
      if (productsInCart[i].id === id) {
        productsInCart.splice(i, 1);
        return productsInCart;
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
