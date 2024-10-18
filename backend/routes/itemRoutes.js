const express = require('express');
const {
    getNews,
    getNewsById,
    createNews,
    updateNews,
    deleteNews
} = require('../controllers/newController');

const router = express.Router();

router.get('/', getNews);
router.get('/:id', getNewsById);
router.post('/create', createNews);
router.put('/:id', updateNews);
router.delete('/:id', deleteNews);

module.exports = router;
