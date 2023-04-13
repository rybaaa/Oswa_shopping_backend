import { Request, Response, Router } from 'express';
import { cartRepository } from '../repositories/cart-repository';
import { ProductItemType } from '../repositories/products-repository';

export const cartRouter = Router({});

cartRouter.get('/', async (req: Request, res: Response) => {
  const products: ProductItemType[] = await cartRepository.getCartProducts();
  res.send(products);
});

cartRouter.post('/', async (req: Request, res: Response) => {
  const newProduct: ProductItemType | undefined =
    await cartRepository.addCartProduct(req.body.id, req.body.title);
  if (newProduct) {
    res.status(201).send(newProduct);
  } else {
    res.status(404).json({ error: 'Some error is occurred. Try again' });
  }
});
cartRouter.delete('/:id', async (req: Request, res: Response) => {
  if (!req.params.id) {
    res.status(404).json({ error: 'No id' });
  }
  const newProducts: ProductItemType[] | null =
    await cartRepository.removeProductFromCart(req.params.id);
  if (newProducts) {
    res.status(204).send(newProducts);
  } else {
    res.status(404).json({ error: 'Some error is occurred. Try again' });
  }
});
cartRouter.put('/:id', async (req: Request, res: Response) => {
  const updatedProductInCart: ProductItemType | null =
    await cartRepository.updateProductDetailsFromCart(
      req.params.id,
      req.body.size,
      req.body.color
    );
  if (updatedProductInCart) {
    res.send(updatedProductInCart);
  } else {
    res.send(404);
  }
});
