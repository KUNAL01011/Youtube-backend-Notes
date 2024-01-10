import mongoose from "mongoose";
import { DATABASE_NAME } from "../../constent.js";


const dbConnection = async () => {
    try {
        const connectionInstence = await mongoose.connect(`${process.env.MONGODB_URI}/${DATABASE_NAME}`);
        console.log(`Mongodb connection stablised`);
        // console.log("What mongo return :- ",connectionInstence);
    } catch (error) {
        console.log("MongoDB connection error ", error);
        process.exit(1);
    }
}

export default dbConnection;