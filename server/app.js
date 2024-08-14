const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.js');
require('dotenv').config();

const Product = require('./models/products.js')

const app = express();
app.use(express.json());
app.use(cors());

const axios = require('axios');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});


const mongo_uri = process.env.MONGO_URI;
mongoose.connect(mongo_uri)

app.post('/signup', (req, res) => {
    const { email, role } = req.body;

    if (!['farmer', 'businessman'].includes(role)) {
        return res.status(400).json("Invalid role selected. Choose either 'farmer' or 'businessman'.");
    }

    User.findOne({ email: email })
        .then(data => {
            if (data && data.email === email) {
                res.json("The user already exists.");
            } else {
                User.create(req.body)
                    .then(user => res.json(user))
                    .catch(err => res.status(500).json(err));
            }
        })
        .catch(err => res.status(500).json(err));
});

app.post('/signin', (req, res) => {
    const { email, password } = req.body;

    // Find the user by email
    User.findOne({ email: email })
        .then(data => {
            if (data) {
                // Check if the password matches
                if (data.password === password) {
                    res.json({
                        name: data.name,
                        role: data.role
                    });
                } else {
                    res.json('Wrong password');
                }
            } else {
                res.json("Invalid email or password");
            }
        })
        .catch(err => res.status(500).json(err));
});


let messages;

app.post('/messages', async (req, res) => {     
        messages = req.body.message; // Store the received message

        async function run() {
            const prompt = messages + ' Respond to the following query in a concise JSON format: {"answer":"Your answer here."} Ensure the response is plain text, without unnecessary whitespace, bold text, or special formatting. Limit the answer to at most 100 words.';
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            console.log(text);
            res.send(text)
          }
        run();
});

app.get('/messages', (req, res) => {
    res.json(messages);
});


app.post('/products', (req, res) => {
    const { productname,price, description,sellername,uri,rating} = req.body;

    const newProduct = new Product({
        productname,
        price,
        description,
        sellername,
        uri,
        rating
    });

    newProduct.save()
        .then(product => res.json(product))
        .catch(err => res.status(500).json({ error: 'Failed to add product' }));
});

app.get('/products', (req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(500).json({ error: 'Failed to retrieve products' }));
});

app.post('/ratings', async (req, res) => {
    const { sellername, rating } = req.body;
  
    try {
      const existingRating = await Product.findOne({ sellername });
  
      if (existingRating) {
        // Update existing rating with the average
        const oldRating = existingRating.rating;
        const newRating = (oldRating + rating) / 2;
        existingRating.rating = newRating;
        await existingRating.save();
        res.json(existingRating);
      } 
    //   else {
        // Create new rating
        // const newRating = new Product({
        //   sellername,
        //   rating
        // });
    //     await newRating.save();
    //     res.json(newRating);
    //   }
    } 
    catch (err) {
      res.status(500).json({ error: 'Failed to add or update rating' });
    }
  });

  app.get('/bestsellers', async (req, res) => {
    try {
      const topProducts = await Product.find()
        .sort({ rating: -1 })  // Sort by rating in descending order
        .limit(10);             // Limit the results to 10
  
      res.status(200).json(topProducts);
    } catch (err) {
      console.error('Error fetching bestsellers:', err);
      res.status(500).json({ error: 'An error occurred while fetching bestsellers.' });
    }
  });


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
