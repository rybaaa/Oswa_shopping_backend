import { Request, Response, Router } from 'express';
import {
  categoriesRepository,
  CategoryType,
} from '../repositories/categories-repository';

export const categoriesRouter = Router({});

categoriesRouter.get('/', async (req: Request, res: Response) => {
  if (req.query.search) {
    const searchCategory = req.query.search.toString();
    const foundCategories: string[] | null =
      await categoriesRepository.fetchCategoriesBySearch(searchCategory);
    if (foundCategories) {
      res.send(foundCategories);
    } else {
      res.status(404).json({ error: 'Not found. Try another' });
    }
  } else {
    const categories: CategoryType[] =
      await categoriesRepository.fetchAllCategories();
    if (categories) {
      res.send(categories);
    } else {
      res.status(404).json({ error: 'Not found. Try again' });
    }
  }
});

// categoriesRouter.get('/:search', async (req: Request, res: Response) => {
//   const foundCategories: string[] | null =
//     await categoriesRepository.fetchCategoriesBySearch(req.params.title);
//   res.send(req);
//   if (foundCategories) {
//     res.send(foundCategories);
//   } else {
//     res.status(404).json({ error: 'Not found. Try another' });
//   }
// });
