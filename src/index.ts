import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import SearchResult from './routes/searchResults';
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
mongoose.connect(process.env.MONGO_DB_URL!);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', SearchResult);

app.get('/', (req: Request, res: Response) => {
    res.send("This is a Sympl API, please use the /api endpoint.");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
