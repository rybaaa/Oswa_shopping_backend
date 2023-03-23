import { Request, Response, Router } from 'express';
import { categoriesRepository } from '../repositories/categories-repository';

export const categoriesRouter = Router({});

categoriesRouter.get('/', (req: Request, res: Response) => {
  const categories = categoriesRepository.fetchAllCategories();
  res.send(categories);
});

categoriesRouter.get('/:title', (req: Request, res: Response) => {
  const filteredCategories = categoriesRepository.fetchCategoriesByFilter(
    req.params.title,
  );
  if (filteredCategories) {
    res.send(filteredCategories);
  } else {
    res.send(404);
  }
});
