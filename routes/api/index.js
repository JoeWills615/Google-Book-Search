  
const router = require('express').Router();
const bookRoutes = require('./books');
const googleRoutes = require('./google');

// Book routes
router.use('/books', bookRoutes);
router.use('/search', searchRoutes)

module.exports = router;