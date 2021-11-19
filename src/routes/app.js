import express from "express";
import morgan from 'morgan';
import cors from 'cors';
import TaskRoutes from "../controllers/client.controller";

const app = express();  

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.get("/", (req, res) => {
  res.json({ message: "welcome to clients-api" });
});

app.use("/api/clients", TaskRoutes);

export default app;
