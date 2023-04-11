import { v4 as uuidv4 } from 'uuid';

type ProductsType = {
  title: string;
  items: ProductItemType[];
};

export type ProductItemType = {
  id: string;
  category: string;
  title: string;
  price: number;
  sizes?: string[];
  currentSize?: string;
  color?: string[];
  currentColor?: string;
  quantity: number[];
  currentQuantity: number;
  image: string;
};

export const allProducts: ProductsType[] = [
  {
    title: 'shoes',
    items: [
      {
        id: uuidv4(),
        category: 'shoes',
        title: "Blissfeel 2 Women's Running Shoe",
        price: 90,
        sizes: ['6', '6.5', '7', '7.5', '8'],
        currentSize: '39',
        color: ['black', '#d7c6c6', 'red', 'green', 'blue'],
        currentColor: '#d7c6c6',
        quantity: [1, 2, 3, 4, 5],
        currentQuantity: 1,
        image: 'https://i.imgur.com/piYVTmQ.png',
      },
      {
        id: uuidv4(),
        category: 'shoes',
        title: 'Fila Women’s Disruptor Premium 2 Sneaker',
        price: 70,
        sizes: ['6', '6.5', '7', '7.5', '8'],
        currentSize: '39',
        color: ['black', '#cdd6d7', 'red', 'green', 'blue'],
        currentColor: '#cdd6d7',
        quantity: [1, 2, 3, 4, 5],
        currentQuantity: 1,
        image: 'https://i.imgur.com/SoMdLIk.png',
      },
      {
        id: uuidv4(),
        category: 'shoes',
        title: 'Air Jordan 1 Hi FlyEase',
        price: 220,
        sizes: ['6', '6.5', '7', '7.5', '8'],
        currentSize: '39',
        color: ['black', '#b06f6f', 'red', 'green', 'blue'],
        currentColor: '#b06f6f',
        quantity: [1, 2, 3, 4, 5],
        currentQuantity: 1,
        image: 'https://i.imgur.com/vOZNdRs.png',
      },
      {
        id: uuidv4(),
        category: 'shoes',
        title: "Puma men's enzo-2",
        price: 280,
        sizes: ['6', '6.5', '7', '7.5', '8'],

        currentSize: '39',
        color: ['black', '#b06f6f', 'red', 'green', 'blue'],
        currentColor: 'black',
        quantity: [1, 2, 3, 4, 5],
        currentQuantity: 1,
        image: 'https://i.imgur.com/lxd6CaV.jpg',
      },
      {
        id: uuidv4(),
        category: 'shoes',
        title: 'Reebok Aztrek 96',
        price: 310,
        sizes: ['6', '6.5', '7', '7.5', '8'],

        currentSize: '39',
        color: ['black', '#e1c31f', 'red', 'green', 'blue'],
        currentColor: '#e1c31f',
        quantity: [1, 2, 3, 4, 5],
        currentQuantity: 1,
        image: 'https://i.imgur.com/akUdD8R.png',
      },
    ],
  },
  {
    title: 'bags',
    items: [
      {
        id: uuidv4(),
        category: 'bags',
        title: 'Balenciaga Hourglass S tote bag',
        price: 1200,
        color: ['black', '#d7c6c6', 'red', 'green', 'blue'],
        currentColor: 'black',
        quantity: [1, 2, 3, 4, 5],
        currentQuantity: 1,
        image: 'https://i.imgur.com/xUvrdKm.png',
      },
      {
        id: uuidv4(),
        category: 'bags',
        title: 'Classic Easy Tote',
        price: 250,
        color: ['black', '#b43e06', 'red', 'green', 'blue'],
        currentColor: '#b43e06',
        quantity: [1, 2, 3, 4, 5],
        currentQuantity: 1,
        image: 'https://i.imgur.com/T4V92Fl.png',
      },
      {
        id: uuidv4(),
        category: 'bags',
        title: 'Become - Orange',
        price: 240,
        color: ['black', '#fa0606', 'red', 'green', 'blue'],
        currentColor: '#fa0606',
        quantity: [1, 2, 3, 4, 5],
        currentQuantity: 1,
        image: 'https://i.imgur.com/hIbFGKx.png',
      },
      {
        id: uuidv4(),
        category: 'bags',
        title: 'OVERNIGHTER BAG',
        price: 300,
        color: ['black', '#443f3f', 'red', 'green', 'blue'],
        currentColor: '#443f3f',
        quantity: [1, 2, 3, 4, 5],
        currentQuantity: 1,
        image: 'https://i.imgur.com/7V2qfZe.png',
      },
      {
        id: uuidv4(),
        category: 'bags',
        title: 'Handbag Medium',
        price: 400,
        color: ['black', '#ab0029', 'red', 'green', 'blue'],
        currentColor: '#ab0029',
        quantity: [1, 2, 3, 4, 5],
        currentQuantity: 1,
        image: 'https://i.imgur.com/uS7eE6g.png',
      },
    ],
  },
  {
    title: 'makeup',
    items: [
      {
        id: uuidv4(),
        category: 'makeup',
        title: 'Set of makeup brushes Makeup Revolution',
        price: 12,
        quantity: [1, 2, 3, 4, 5],
        currentQuantity: 1,
        image: 'https://i.imgur.com/MjSUMll.png',
      },
      {
        id: uuidv4(),
        category: 'makeup',
        title: 'Makeup Revolution maxi reloaded palette',
        price: 20,
        quantity: [1, 2, 3, 4, 5],
        currentQuantity: 1,
        image: 'https://i.imgur.com/3aXNA8D.png',
      },
      {
        id: uuidv4(),
        category: 'makeup',
        title: 'Instant age rewind eraser concealer',
        price: 15,
        quantity: [1, 2, 3, 4, 5],
        currentQuantity: 1,
        image: 'https://i.imgur.com/IucAqcd.png',
      },
      {
        id: uuidv4(),
        category: 'makeup',
        title: 'Bye Bye Anti-Aging Waterproof Concealer',
        price: 11,
        quantity: [1, 2, 3, 4, 5],
        currentQuantity: 1,
        image: 'https://i.imgur.com/vS6pHcR.png',
      },
      {
        id: uuidv4(),
        category: 'makeup',
        title: 'Makeup brush sets | Morphe US',
        price: 30,
        quantity: [1, 2, 3, 4, 5],
        currentQuantity: 1,
        image: 'https://i.imgur.com/ad1FErx.png',
      },
    ],
  },
];

export const productsRepository = {
  getAllProducts() {
    return allProducts;
  },
  fetchSpecificCategory(title: string) {
    const specificCategory = allProducts.find((it) => it.title === title);
    if (specificCategory) {
      return specificCategory;
    } else return undefined;
  },
};
