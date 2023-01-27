import express from "express";
import { config } from "dotenv";
import mountRoutes from "./routes/index.js";

config();

const PORT = Number(process.env.PORT) || 8080;

const app = express();
app.use(express.json());

mountRoutes(app);

const start = () => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
};

export { start };
