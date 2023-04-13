import { Request, Response, Router } from 'express';
import {
  categoriesRepository,
  CategoryType,
} from '../repositories/categories-repository';

export const categoriesRouter = Router({});

categoriesRouter.get('/', async (req: Request, res: Response) => {
  const categories: CategoryType[] =
    await categoriesRepository.fetchAllCategories();
  if (categories) {
    res.send(categories);
  } else {
    res.status(404).json({ error: 'Not found. Try again' });
  }
});

categoriesRouter.get('/:title', async (req: Request, res: Response) => {
  const filteredCategories: CategoryType | null =
    await categoriesRepository.fetchCategoriesByFilter(req.params.title);
  if (filteredCategories) {
    res.send(filteredCategories);
  } else {
    res.status(404).json({ error: 'Not found. Try another' });
  }
});
