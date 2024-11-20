import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const db = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB Connected Successfully MONGODB HOST: ${db.connection.host}`);
    } catch (error) {
        console.log(`MongoDB Connection Failed ERRROR: ${error}`);
        process.exit(1);
    }
};

const disconnectDB = async () => {
    try {
        await mongoose.disconnect();
    } catch (error) {
        console.log(`MongoDB Disconnection Failed, Error: ${error}`);
    }
};

export { connectDB, disconnectDB }