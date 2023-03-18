import express, {Request, Response} from 'express'

const app = express()
const port = process.env.PORT || 5000

const categories = [{title: 'Makeup'}, {title: 'Shoes'}, {title: 'Bags'}, {title: 'Clothes'}, {title: 'Watch'}, {title: 'Accessories'}, {title: 'Nails'}, {title: 'Lingerie'}, {title: 'Perfume'}, {title: 'Pajama'}]


app.get('/categories', (req: Request, res: Response) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log(`Starting app on port ${port}`)
})