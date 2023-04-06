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
        title: 'Nike Air Jordan 6 retro black infrared',
        price: 450,
        sizes: ['39', '40', '41', '42', '43'],
        currentSize: '39',
        color: ['black', '#d7c6c6', 'red', 'green', 'blue'],
        currentColor: 'black',
        quantity: [1, 2, 3, 4, 5],
        currentQuantity: 1,
        image: 'https://i.imgur.com/jp2weP7.jpg',
      },
      {
        id: uuidv4(),
        category: 'shoes',
        title: 'Nike Air Jordan 1 retro high og volt gold',
        price: 320,
        sizes: ['39', '40', '41', '42', '43'],
        currentSize: '39',
        color: ['black', '#e58f06', 'red', 'green', 'blue'],
        currentColor: '#e58f06',
        quantity: [1, 2, 3, 4, 5],
        currentQuantity: 1,
        image: 'https://i.imgur.com/OU7jOCb.jpg',
      },
      {
        id: uuidv4(),
        category: 'shoes',
        title: 'Adidas shoes',
        price: 300,
        sizes: ['39', '40', '41', '42', '43'],
        currentSize: '39',
        color: ['black', '#b06f6f', 'red', 'green', 'blue'],
        currentColor: '#b06f6f',
        quantity: [1, 2, 3, 4, 5],
        currentQuantity: 1,
        image: 'https://i.imgur.com/N6p6xIx.jpg',
      },
      {
        id: uuidv4(),
        category: 'shoes',
        title: "Puma men's enzo-2",
        price: 280,
        sizes: ['39', '40', '41', '42', '43'],
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
        sizes: ['39', '40', '41', '42', '43'],
        currentSize: '39',
        color: ['black', '#e1c31f', 'red', 'green', 'blue'],
        currentColor: '#e1c31f',
        quantity: [1, 2, 3, 4, 5],
        currentQuantity: 1,
        image: 'https://i.imgur.com/jTbvOKt.jpg',
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
        image: 'https://i.imgur.com/4ftDEvV.jpg',
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
        image: 'https://i.imgur.com/vzXRTfr.jpg',
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
