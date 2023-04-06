import { Request, Response, Router } from 'express';
import { productsRepository } from '../repositories/products-repository';

export const productsRouter = Router({});

productsRouter.get('/', (req: Request, res: Response) => {
  const products = productsRepository.getAllProducts();
  if (products) {
    res.send(products);
  } else {
    res.status(404).json({ error: 'Not found. Try again' });
  }
});
productsRouter.get('/:title', (req: Request, res: Response) => {
  const filteredCategory = productsRepository.fetchSpecificCategory(
    req.params.title
  );
  if (filteredCategory) {
    res.send(filteredCategory);
  } else {
    res.status(404).json({ error: 'Not found. Try another' });
  }
});
