import express, { Express } from 'express'
import mongoose, { mongo } from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes'
import bodyParser from 'body-parser'

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(bodyParser.json())
app.use(todoRoutes)

const uri: string = `${process.env.MONGO_URI}`
const options = { userNewUrlParser: true, useUnifiedTopology: true, useNewUrlParser: true }
mongoose.set("useFindAndModify", false)

mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })