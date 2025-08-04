import express from 'express'
import task from './routes/task'
import user from './routes/user'
import { errorMiddleware } from './middlewares/error'

const app = express()
app.use(express.json())

app.use('/tasks', task)
app.use('/users', user)

app.use(errorMiddleware)

export default app
