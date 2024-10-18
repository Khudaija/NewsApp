const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import Routes
const itemRoutes = require('./routes/itemRoutes');
const newsRoutes = require('./controllers/newController');

// App initialization
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/uploads', express.static('uploads'));
app.use('/api/news', itemRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.log(err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
