import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import { cartRouter } from './routes/cart-router';
import { categoriesRouter } from './routes/categories-router';
import { productsRouter } from './routes/products-router';

const app = express();
const port = process.env.PORT || 5000;
const parserMiddleware = bodyParser({});

app.use(fileUpload());
app.use(express.static('public'));
app.post('/upload', (req, res) => {
  console.log(req.files);

  res.sendStatus(200);
});
app.use(
  cors({
    origin: ['http://localhost:3000', 'https://oswa-shopping.vercel.app'],
    credentials: true,
  })
);
app.use(parserMiddleware);
app.use('/cart', cartRouter);
app.use('/categories', categoriesRouter);
app.use('/products', productsRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Starting app on port ${port}`);
});
