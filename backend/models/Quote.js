import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
});


const Quote = mongoose.model('Quote', quoteSchema);

export default Quote;
