import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import Quote from './models/Quote.js';
import loadQuote from "./data.js"
import dotenv from "dotenv";

dotenv.config();

connectDB();
const app = express();
const PORT = process.env.PORT || 8000;
// loadQuote();

app.use(cors());
app.use(express.json());
app.use(express.static("frontend"))

app.get('/quote', async(req,res)=>{
    try {
        const count = await Quote.countDocuments();
        const randomIndex = Math.floor(Math.random() * count);
        const data = await Quote.findOne().skip(randomIndex);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error.message);
    }
});

// if i include this code, it will add quotes to the database
// and the fronend will be able to access it

// app.post('/quote', async(req,res)=>{
//     try {
//         const { quote, author, category } = req.body;
//         if (!quote || !author || !category) {
//             return res.status(400).json({ message: 'All fields are required' });
//         }
//         const newQuote = Quote.create({
//             quote,
//             author,
//             category
//         });
//         res.status(201).json({message: 'Quote added successfully'});
//     } catch (error) {
//         res.status(500).json({message:"something went wrong"});
//         console.error("error : ",error.message);
//     }
// });



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});