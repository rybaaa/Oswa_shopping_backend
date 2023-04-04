import { v4 as uuidv4 } from 'uuid';

export type ProductsType = {
  id: string;
  title: string;
  price: number;
  sizes: string[];
  currentSize: string;
  color?: string[];
  currentColor?: string;
  quantity: number[];
  currentQuantity: number;
  image: string;
};

export const allProducts: ProductsType[] = [
  {
    id: uuidv4(),
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
