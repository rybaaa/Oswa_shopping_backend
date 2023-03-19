import express, { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 5000;
const parserMiddleware = bodyParser({});

app.use(parserMiddleware);

const categories = [
  { id: uuidv4(), title: 'makeup' },
  { id: uuidv4(), title: 'shoes' },
  { id: uuidv4(), title: 'bags' },
  { id: uuidv4(), title: 'clothes' },
  { id: uuidv4(), title: 'watch' },
  { id: uuidv4(), title: 'accessories' },
  { id: uuidv4(), title: 'nails' },
  { id: uuidv4(), title: 'lingerie' },
  { id: uuidv4(), title: 'perfume' },
  { id: uuidv4(), title: 'pajama' },
];

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
    price: 520,
    sizes: ['5ml', '10ml', '15ml'],
  },
];

app.get('/categories', (req: Request, res: Response) => {
  res.send(categories);
});

app.get('/categories/:title', (req: Request, res: Response) => {
  let category = categories.find((el) => el.title === req.params.title);
  if (category) {
    res.send(category);
  } else {
    res.send(404);
  }
});

app.post('/cart', (req: Request, res: Response) => {
  const newProductInCart = products.find((pr) => pr.id === req.body.id);
  if (newProductInCart) {
    productsInCart.push(newProductInCart);
    res.status(201).send(newProductInCart);
  } else {
    res.send(404);
  }
});

app.delete('/cart', (req: Request, res: Response) => {
  for (let i = 0; i < productsInCart.length; i++) {
    if (productsInCart[i].id === req.params.id) {
      productsInCart.splice(i, 1);
      res.send(204);
      return;
    }
  }
  res.send(404);
});

app.get('/categories/:title', (req: Request, res: Response) => {
  let category = categories.find((el) => el.title === req.params.title);
  if (category) {
    res.send(category);
  } else {
    res.send(404);
  }
});

app.put('/cart/:id', (req: Request, res: Response) => {
  let product = productsInCart.find((u) => u.id === req.params.id);
  if (product) {
    product.size = req.body.size;
    product.color = req.body.color;
    res.send(product);
  } else {
    res.send(404);
  }
});

app.listen(port, () => {
  console.log(`Starting app on port ${port}`);
});
