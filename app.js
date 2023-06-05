const express = require('express');
const cors = require('cors')
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

// Middleware
app.use(express.static('https://task-manager-c295.onrender.com/'))
app.use(express.json())
app.use(cors())

app.use('/api/v1/tasks', tasks)

const port = process.env.PORT;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()