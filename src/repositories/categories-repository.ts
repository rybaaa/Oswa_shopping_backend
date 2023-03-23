import { v4 as uuidv4 } from 'uuid';

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

export const categoriesRepository = {
  fetchAllCategories() {
    return categories;
  },
  fetchCategoriesByFilter(title: string) {
    const category = categories.find((el) => el.title === title);
    if (category) {
      return category;
    } else {
      return false;
    }
  },
};
