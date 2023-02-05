import express from "express";
import { config } from "dotenv";
import mountRoutes from "./routes/index.js";
import { HOST, PORT } from "./utils/consts";

config();

const app = express();
app.use(express.json());

mountRoutes(app);

const start = () => {
  app.listen(PORT, () => {
    console.log(`App listening on http://${HOST}:${PORT}`);
  });
};

export { start };
