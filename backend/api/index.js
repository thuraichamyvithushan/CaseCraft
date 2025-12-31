import serverless from "serverless-http";
import app from "../server.js";   // <-- change to your real file name

export default serverless(app);
