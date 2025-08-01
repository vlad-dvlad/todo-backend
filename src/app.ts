import express from 'express'
import task from './routes/task'
import category from './routes/category'
import user from './routes/user'

const app = express()
app.use(express.json())

app.use('/tasks', task)
app.use('/category', category)
app.use('/users', user)

export default app
