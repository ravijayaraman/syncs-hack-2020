const express = require('express');
const {
  getOffers,
  getOffer,
  addOffer,
  updateOffer,
  deleteOffer,
  getOffersInRadius,
  offerPhotoUpload,
} = require('../controllers/offers');

const Offer = require('../models/Offer');

const router = express.Router({ mergeParams: true });

const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(
    advancedResults(Offer, {
      path: 'category',
      select: 'name description',
    }),
    getOffers
  )
  .post(protect, authorize('publisher', 'admin'), addOffer);

router
  .route('/:id')
  .get(getOffer)
  .put(protect, authorize('publisher', 'admin'), updateOffer)
  .delete(protect, authorize('publisher', 'admin'), deleteOffer);

router
  .route('/:id/photo')
  .put(protect, authorize('publisher', 'admin'), offerPhotoUpload);

router.route('/radius/:zipcode/:distance').get(getOffersInRadius);

module.exports = router;
