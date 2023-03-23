import { v4 as uuidv4 } from 'uuid';

export type ProductsType = {
  id: string;
  title: string;
  price: number;
  sizes: string[];
  currentSize: string;
  color?: string[];
  currentColor?: string;
};

export const allProducts: ProductsType[] = [
  {
    id: uuidv4(),
    title: 'pajama ODH',
    price: 120,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    currentSize: 'S',
    color: ['black', 'white', 'red', 'green', 'blue'],
    currentColor: 'black',
  },
  {
    id: uuidv4(),
    title: 'pajama ST',
    price: 140,
    sizes: ['5ml', '10ml', '15ml'],
    currentSize: '5ml',
  },
  {
    id: uuidv4(),
    title: 'pajama ST',
    price: 520,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    currentSize: 'S',
    color: ['black', 'white', 'red', 'green', 'blue'],
    currentColor: 'black',
  },
];
