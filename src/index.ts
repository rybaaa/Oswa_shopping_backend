import express from 'express';
import bodyParser from 'body-parser';
import { cartRouter } from './routes/cart-router';
import { categoriesRouter } from './routes/categories-router';

const app = express();
const port = process.env.PORT || 5000;
const parserMiddleware = bodyParser({});

app.use(parserMiddleware);
app.use('/cart', cartRouter);
app.use('/categories', categoriesRouter);

app.listen(port, () => {
  console.log(`Starting app on port ${port}`);
});
