import dotenv from "dotenv";
import app from "./app.js";
import { connectDB, disconnectDB } from "./db/index.js";

dotenv.config(
    {
        path: "./.env"
    }
);

(async () => {
    try {
        await connectDB();
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on PORT: ${process.env.PORT || 8000}`)
        })
    } catch (error) {
        console.log(`MongoDB Connection Failed Error: ${error}`);
        process.exit(1);
    }
})();

process.on("SIGINT", async () => {
    try {
        console.log("Gracefully shutting down...")
        await disconnectDB();
        process.exit(0);
    } catch (error) {
        console.log(`MongoDB Disconnection Failed Error: ${error}`)
    }
});