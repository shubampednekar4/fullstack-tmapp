import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import router from './routes/authRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import { auth } from './middleware/auth.js';
const app = express();

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.use('/api/auth', router);
app.use('/', (req,res) => {
    res.json({ message : 'api is  running very nicely'})
})

app.use(errorHandler)



export default app;