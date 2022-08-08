import express from 'express'
import router from './routes/routes'
import mongoose from 'mongoose';
import 'dotenv/config'

mongoose.connect(process.env.MONGO)

const app = express()

app.use(express.json())

app.use(router)

app.listen(process.env.PORT, async (req, res) => {
    console.log('listening on port 3000')
})