const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded())
const cors = require('cors')
app.use(cors())
require('dotenv').config()

const authenticate = require('./middleware/authMiddleware')
// app.all('/b/*', authenticate)


const userRouter = require('./routes/user')
app.use('/u', userRouter)

const babyRouter = require('./routes/babies')
app.use('/b', babyRouter)

const weightRouter = require('./routes/weightRoute')
app.use('/b/weight', weightRouter)

//STRING, TEXT, ENUM, INTEGER, BOOLEAN, FLOAT

app.listen(process.env.PORT, () => {
    console.log('server running.....')
})
