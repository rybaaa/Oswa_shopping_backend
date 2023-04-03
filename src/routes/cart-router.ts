import { Request, Response, Router } from 'express';
import { cartRepository } from '../repositories/cart-repository';

export const cartRouter = Router({});

cartRouter.get('/', (req: Request, res: Response) => {
  const products = cartRepository.getCartProducts();
  res.send(products);
});

cartRouter.post('/', (req: Request, res: Response) => {
  const newProduct = cartRepository.addCartProduct(req.body.id);
  if (newProduct) {
    res.status(201).send(newProduct);
  } else {
    res.status(404).json({ error: 'Some error is occurred. Try again' });
  }
});
cartRouter.delete('/', (req: Request, res: Response) => {
  if (!req.params.id) {
    res.status(404).json({ error: 'No id' });
  }
  const removedProduct = cartRepository.removeProductFromCart(req.params.id);
  if (removedProduct) {
    res.send(204);
  } else {
    res.status(404).json({ error: 'Some error is occurred. Try again' });
  }
});
cartRouter.put('/:id', (req: Request, res: Response) => {
  const updatedProductInCart = cartRepository.updateProductDetailsFromCart(
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
