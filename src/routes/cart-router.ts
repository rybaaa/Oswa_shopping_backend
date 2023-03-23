import { Request, Response, Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

export const cartRouter = Router({});

const productsInCart = [];

const products = [
  {
    id: uuidv4(),
    title: 'pajama ODH',
    price: 120,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    color: ['black', 'white', 'red', 'green', 'blue'],
  },
  {
    id: uuidv4(),
    title: 'pajama ST',
    price: 140,
    sizes: ['5ml', '10ml', '15ml'],
  },
  {
    id: uuidv4(),
    title: 'pajama ST',
    price: 520,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    color: ['black', 'white', 'red', 'green', 'blue'],
  },
];

cartRouter.post('/', (req: Request, res: Response) => {
  const newProductInCart = products.find((pr) => pr.id === req.body.id);
  if (newProductInCart) {
    productsInCart.push(newProductInCart);
    res.status(201).send(newProductInCart);
  } else {
    res.send(404);
  }
});
cartRouter.delete('/', (req: Request, res: Response) => {
  for (let i = 0; i < productsInCart.length; i++) {
    if (productsInCart[i].id === req.params.id) {
      productsInCart.splice(i, 1);
      res.send(204);
      return;
    }
  }
  res.send(404);
});
cartRouter.put('/:id', (req: Request, res: Response) => {
  let product = productsInCart.find((u) => u.id === req.params.id);
  if (product) {
    product.size = req.body.size;
    product.color = req.body.color;
    res.send(product);
  } else {
    res.send(404);
  }
});
