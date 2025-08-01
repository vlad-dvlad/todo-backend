import express from 'express'
import task from './routes/task'

const app = express()
app.use(express.json())

app.use('/tasks', task)

export default app
