import {config} from 'dotenv'
import connectDb from './config/db.js'
import app from './app.js';

config();

connectDb();


const PORT = process.env.PORT || 5000;
console.log(process.env.PORT)
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})