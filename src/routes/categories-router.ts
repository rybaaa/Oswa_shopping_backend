import { Request, Response, Router } from 'express';
import { categoriesRepository } from '../repositories/categories-repository';

export const categoriesRouter = Router({});

categoriesRouter.get('/', (req: Request, res: Response) => {
  const categories = categoriesRepository.fetchAllCategories();
  if (categories) {
    res.send(categories);
  } else {
    res.status(404).json({ error: 'Not found. Try again' });
  }
});

categoriesRouter.get('/:title', (req: Request, res: Response) => {
  const filteredCategories = categoriesRepository.fetchCategoriesByFilter(
    req.params.title
  );
  if (filteredCategories) {
    res.send(filteredCategories);
  } else {
    res.status(404).json({ error: 'Not found. Try another' });
  }
});
