import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB);
        console.log(`MongoDB Connected`)
    } catch (error) {
     console.error(error)   
    }
}
export default connectDb