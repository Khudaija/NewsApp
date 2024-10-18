const News = require('../models/newsModel');
const upload = require('../middleware/upload');

// Get all news
const getNews = async (req, res) => {
    try {
        const news = await News.find();
        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get single news by id
const getNewsById = async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        if (!news) {
            return res.status(404).json({ message: 'News not found' });
        }
        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create new news
const createNews = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: err });
        }

        const { news_title, news_description } = req.body;
        const baseUrl = `${req.protocol}://${req.get('host')}`;
        const imageUrl = req.file ? `${baseUrl}/uploads/news_images/${req.file.filename}` : '';

        try {
            const newNews = new News({
                news_title,
                news_description,
                image: imageUrl
            });
            await newNews.save();
            res.status(201).json(newNews);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
};

// Update news by id
const updateNews = async (req, res) => {
    try {
        const news = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!news) {
            return res.status(404).json({ message: 'News not found' });
        }
        res.status(200).json(news);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete news by id
const deleteNews = async (req, res) => {
    try {
        const news = await News.findByIdAndDelete(req.params.id);
        if (!news) {
            return res.status(404).json({ message: 'News not found' });
        }
        res.status(200).json({ message: 'News deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getNews,
    getNewsById,
    createNews,
    updateNews,
    deleteNews
};
