const express = require('express');
const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/categories');

const Bootcamp = require('../models/Bootcamp');

// Include other resource routers
const offerRouter = require('./offers');

const router = express.Router();

const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');
const Category = require('../models/Category');

// Re-route into other resource routers
router.use('/:categoryId/offers', offerRouter);

router
  .route('/')
  .get(advancedResults(Category, 'offers'), getCategories)
  .post(protect, authorize('publisher', 'admin'), createCategory);

router
  .route('/:id')
  .get(getCategory)
  .put(protect, authorize('publisher', 'admin'), updateCategory)
  .delete(protect, authorize('publisher', 'admin'), deleteCategory);

module.exports = router;
