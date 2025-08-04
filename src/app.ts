import express from 'express'
import cors from 'cors'
import task from './routes/task'
import user from './routes/user'
import { errorMiddleware } from './middlewares/error'

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200,
}

const app = express()
app.use(express.json())
app.use(cors(corsOptions))

app.use('/tasks', task)
app.use('/users', user)

app.use(errorMiddleware)

export default app
