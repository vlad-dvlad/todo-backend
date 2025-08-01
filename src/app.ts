import express from 'express'
import task from './routes/task'
import category from './routes/category'

const app = express()
app.use(express.json())

app.use('/tasks', task)
app.use('/category', category)

export default app
