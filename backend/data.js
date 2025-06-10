import Quote from "./models/Quote.js";

const selfHelpQuotes = [
    {
      quote: "Whether you think you can or you think you can't, you're right.",
      author: "Henry Ford",
      category: "Mindset"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      category: "Passion"
    },
    {
      quote: "You must be the change you wish to see in the world.",
      author: "Mahatma Gandhi",
      category: "Personal Growth"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs",
      category: "Purpose"
    },
    {
      quote: "The journey of a thousand miles begins with one step.",
      author: "Lao Tzu",
      category: "Action"
    },
    {
      quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
      author: "Zig Ziglar",
      category: "Growth"
    },
    {
      quote: "Happiness is not something ready made. It comes from your own actions.",
      author: "Dalai Lama",
      category: "Happiness"
    },
    {
      quote: "If you're going through hell, keep going.",
      author: "Winston Churchill",
      category: "Perseverance"
    },
    {
      quote: "The only person you are destined to become is the person you decide to be.",
      author: "Ralph Waldo Emerson",
      category: "Self-Determination"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
      category: "Resilience"
    },
    {
      quote: "Our greatest glory is not in never falling, but in rising every time we fall.",
      author: "Confucius",
      category: "Perseverance"
    },
    {
      quote: "The mind is everything. What you think you become.",
      author: "Buddha",
      category: "Mindset"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky",
      category: "Opportunity"
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
      category: "Belief"
    },
    {
      quote: "Change your thoughts and you change your world.",
      author: "Norman Vincent Peale",
      category: "Mindset"
    },
    {
      quote: "The best revenge is massive success.",
      author: "Frank Sinatra",
      category: "Motivation"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
      category: "Perseverance"
    },
    {
      quote: "You can't cross the sea merely by standing and staring at the water.",
      author: "Rabindranath Tagore",
      category: "Action"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
      category: "Positive Thinking"
    },
    {
      quote: "Act as if what you do makes a difference. It does.",
      author: "William James",
      category: "Impact"
    }
  ];


  
const loadQuote = async ()=>{
    try {
        const newQuotes = await Quote.insertMany(selfHelpQuotes)
        console.log(`data is inserted: ${newQuotes}`);
    } catch (error) {
        console.log(error.message);
    }
}


export default loadQuote;