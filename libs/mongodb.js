import { mongoose } from "mongoose";

const ConnectMongo = async() =>{
 try {
    await mongoose.connect(process.env.MONGO_URI)
 } catch (error) {
    console.log(error)
 }
}

export default ConnectMongo;