import app from "../server.js";
import connectDB from "../config/db.js";

let isConnected = false;

const connect = async () => {
    if (isConnected) return;
    try {
        await connectDB();
        isConnected = true;
    } catch (err) {
        console.error("Database connection failed during request:", err);
    }
};

export default async (req, res) => {
    await connect();
    return app(req, res);
};
