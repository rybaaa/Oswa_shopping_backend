import { Request, Response, Router } from 'express';
import {
  productsRepository,
  ProductsType,
} from '../repositories/products-repository';

export const productsRouter = Router({});

productsRouter.get('/', async (req: Request, res: Response) => {
  const products: ProductsType[] = await productsRepository.getAllProducts();
  if (products) {
    res.send(products);
  } else {
    res.status(404).json({ error: 'Not found. Try again' });
  }
});
productsRouter.get('/:title', async (req: Request, res: Response) => {
  const filteredCategory: ProductsType | null =
    await productsRepository.fetchSpecificCategory(req.params.title);
  if (filteredCategory) {
    res.send(filteredCategory);
  } else {
    res.status(404).json({ error: 'Not found. Try another' });
  }
});
