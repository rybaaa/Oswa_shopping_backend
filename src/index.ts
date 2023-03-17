import express, {Request, Response} from 'express'
const app = express()
const port = 5000

app.get('/', (req:Request, res:Response) => {
    res.send('Lets start')
})

app.listen(port, () => {
    console.log(`Starting app on port ${port}`)
})