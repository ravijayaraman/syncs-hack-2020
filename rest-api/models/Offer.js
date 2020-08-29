const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder');

const OfferSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
  },
  photo: {
    type: String,
    default: 'no-photo.jpg',
  },
  minimumPoint: {
    type: Number,
  },
  type: {
    type: String,
    enum: ['have', 'request'],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: 'Category',
  },
  address: {
    type: String,
  },
  location: {
    // GeoJSON Point
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
      index: '2dsphere',
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
});

// Geocode & create location field
OfferSchema.pre('save', async function (next) {
  console.warn(`address:${this.address}`);

  const loc = await geocoder.geocode(this.address);

  this.location = {
    type: 'Point',
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress,
    street: loc[0].streetName,
    city: loc[0].city,
    state: loc[0].stateCode,
    zipcode: loc[0].zipcode,
    country: loc[0].countryCode,
  };

  // Do not save address in DB
  this.address = undefined;
  next();
});

module.exports = mongoose.model('Offer', OfferSchema);
