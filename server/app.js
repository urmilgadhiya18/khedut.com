require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const Joi = require("joi");

app.use(express.json());
app.use(cors());

const axios = require('axios');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mongo_uri = process.env.MONGO_URI;
mongoose.connect(mongo_uri)

const signup = require('./routes/signup.js')
app.use('/signup', signup);

const signin = require('./routes/signin.js')
app.use('/signin', signin);

const chatWithAI = require('./routes/chatWithAI.js')
app.use('/messages', chatWithAI);

const product = require('./routes/product.js')
app.use('/products',product)

const rating = require('./routes/rating.js');
app.use('/ratings', rating);
// app.post('/ratings', async (req, res) => {
//     const { sellername, rating } = req.body;
  
//     try {
//       const existingRating = await Product.findOne({ sellername });
  
//       if (existingRating) {
//         // Update existing rating with the average
//         const oldRating = existingRating.rating;
//         const newRating = (oldRating + rating) / 2;
//         existingRating.rating = newRating;
//         await existingRating.save();
//         res.json(existingRating);
//       }
//     } 
//     catch (err) {
//       res.status(500).json({ error: 'Failed to add or update rating' });
//     }
//   });
  
  const bestSellers = require('./routes/bestSeller.js');
  app.use('/bestsellers', bestSellers);
  // app.get('/bestsellers', async (req, res) => {
  //   try {
  //     const topProducts = await Product.find()
  //       .sort({ rating: -1 })  // Sort by rating in descending order
  //       .limit(10);             // Limit the results to 10
  
  //     res.status(200).json(topProducts);
  //   } catch (err) {
  //     console.error('Error fetching bestsellers:', err);
  //     res.status(500).json({ error: 'An error occurred while fetching bestsellers.' });
  //   }
  // });


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
