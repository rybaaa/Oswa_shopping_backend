import { v4 as uuidv4 } from 'uuid';

export type CategoryType = {
  id: string;
  title: string;
  image: string;
};

const categories: CategoryType[] = [
  {
    id: uuidv4(),
    title: 'makeup',
    image:
      'https://raw.githubusercontent.com/rybaaa/Oswa-shopping/master/src/assets/categories/makeup.png',
  },
  {
    id: uuidv4(),
    title: 'shoes',
    image:
      'https://raw.githubusercontent.com/rybaaa/Oswa-shopping/master/src/assets/categories/shoes2.png',
  },
  {
    id: uuidv4(),
    title: 'bags',
    image:
      'https://raw.githubusercontent.com/rybaaa/Oswa-shopping/master/src/assets/categories/bags2.png',
  },
  {
    id: uuidv4(),
    title: 'clothes',
    image:
      'https://raw.githubusercontent.com/rybaaa/Oswa-shopping/master/src/assets/categories/clothes.png',
  },
  {
    id: uuidv4(),
    title: 'watch',
    image:
      'https://raw.githubusercontent.com/rybaaa/Oswa-shopping/master/src/assets/categories/watch.png',
  },
  {
    id: uuidv4(),
    title: 'accessories',
    image:
      'https://raw.githubusercontent.com/rybaaa/Oswa-shopping/master/src/assets/categories/accessories.png',
  },
  {
    id: uuidv4(),
    title: 'nails',
    image:
      'https://raw.githubusercontent.com/rybaaa/Oswa-shopping/master/src/assets/categories/nails.png',
  },
  {
    id: uuidv4(),
    title: 'lingerie',
    image:
      'https://raw.githubusercontent.com/rybaaa/Oswa-shopping/master/src/assets/categories/lingerie.png',
  },
  {
    id: uuidv4(),
    title: 'perfume',
    image:
      'https://raw.githubusercontent.com/rybaaa/Oswa-shopping/master/src/assets/categories/perfume.png',
  },
  {
    id: uuidv4(),
    title: 'pajama',
    image:
      'https://raw.githubusercontent.com/rybaaa/Oswa-shopping/master/src/assets/categories/pajama.png',
  },
];

export const categoriesRepository = {
  async fetchAllCategories(): Promise<CategoryType[]> {
    return categories;
  },
  async fetchCategoriesBySearch(title: string): Promise<string[] | null> {
    const regex = new RegExp(title);
    const foundCategories = categories.filter((el) => regex.test(el.title));
    if (foundCategories) {
      const titles: string[] = [];
      foundCategories.forEach((el) => titles.push(el.title));
      return titles;
    } else return null;
  },
};
