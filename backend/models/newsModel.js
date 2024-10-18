const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    news_title: {
        type: String,
        required: true,
        trim: true
    },
    news_description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true // Automatically adds `createdAt` and `updatedAt` fields
});

module.exports = mongoose.model('News', newsSchema);
