import { v4 as uuidv4 } from 'uuid';
import { Request, Response, Router } from 'express';

export const categoriesRouter = Router({});

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

categoriesRouter.get('/', (req: Request, res: Response) => {
  res.send(categories);
});

categoriesRouter.get('/:title', (req: Request, res: Response) => {
  let category = categories.find((el) => el.title === req.params.title);
  if (category) {
    res.send(category);
  } else {
    res.send(404);
  }
});
