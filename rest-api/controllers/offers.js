const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Offer = require('../models/Offer');
const Category = require('../models/Category');
const geocoder = require('../utils/geocoder');

// @desc      Get courses
// @route     GET /api/v1/courses
// @route     GET /api/v1/bootcamps/:bootcampId/courses
// @access    Public
exports.getOffers = asyncHandler(async (req, res, next) => {
  if (req.params.categoryId) {
    const courses = await Offer.find({ category: req.params.categoryId });

    return res.status(200).json({
      success: true,
      count: courses.length,
      data: courses,
    });
  } else {
    res.status(200).json(res.advancedResults);
  }
});

// @desc      Get single course
// @route     GET /api/v1/courses/:id
// @access    Public
exports.getOffer = asyncHandler(async (req, res, next) => {
  const offer = await Offer.findById(req.params.id).populate({
    path: 'bootcamp',
    select: 'name description',
  });

  if (!offer) {
    return next(
      new ErrorResponse(`No offer with the id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: offer,
  });
});

// @desc      Add offer
// @route     POST /api/v1/categories/:categoryId/offers
// @access    Private
exports.addOffer = asyncHandler(async (req, res, next) => {
  req.body.category = req.params.categoryId;
  req.body.user = req.user.id;

  const category = await Category.findById(req.params.categoryId);

  if (!category) {
    return next(
      new ErrorResponse(
        `No Category with the id of ${req.params.categoryId}`,
        404
      )
    );
  }

  const offer = await Offer.create(req.body);

  res.status(200).json({
    success: true,
    data: offer,
  });
});

// @desc      Update Offer
// @route     PUT /api/v1/offers/:id
// @access    Private
exports.updateOffer = asyncHandler(async (req, res, next) => {
  let offer = await Offer.findById(req.params.id);

  if (!offer) {
    return next(
      new ErrorResponse(`No offer with the id of ${req.params.id}`, 404)
    );
  }

  offer = await Offer.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  offer.save();

  res.status(200).json({
    success: true,
    data: offer,
  });
});

// @desc      Delete orffer
// @route     DELETE /api/v1/offers/:id
// @access    Private
exports.deleteOffer = asyncHandler(async (req, res, next) => {
  const offer = await Offer.findById(req.params.id);

  if (!offer) {
    return next(
      new ErrorResponse(`No course with the id of ${req.params.id}`, 404)
    );
  }

  await offer.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc      Get offers within a radius
// @route     GET /api/v1/offers/radius/:zipcode/:distance
// @access    Private
exports.getOffersInRadius = asyncHandler(async (req, res, next) => {
  const { zipcode, distance } = req.params;

  // Get lat/lng from geocoder
  const loc = await geocoder.geocode(zipcode);
  const lat = loc[0].latitude;
  const lng = loc[0].longitude;

  // Calc radius using radians
  // Divide dist by radius of Earth
  // Earth Radius = 3,963 mi / 6,378 km
  const radius = distance / 3963;

  const offers = await Category.find({
    location: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
  });

  res.status(200).json({
    success: true,
    count: offers.length,
    data: offers,
  });
});

// @desc      Upload photo for offer
// @route     PUT /api/v1/offers/:id/photo
// @access    Private
exports.offerPhotoUpload = asyncHandler(async (req, res, next) => {
  const offer = await Offer.findById(req.params.id);

  if (!offer) {
    return next(
      new ErrorResponse(`Offer not found with id of ${req.params.id}`, 404)
    );
  }

  if (!req.files) {
    return next(new ErrorResponse(`Please upload a file`, 400));
  }

  const file = req.files.file;

  // Make sure the image is a photo
  if (!file.mimetype.startsWith('image')) {
    return next(new ErrorResponse(`Please upload an image file`, 400));
  }

  // Create custom filename
  file.name = `photo_${offer._id}${path.parse(file.name).ext}`;

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse(`Problem with file upload`, 500));
    }

    await Offer.findByIdAndUpdate(req.params.id, { photo: file.name });

    res.status(200).json({
      success: true,
      data: file.name,
    });
  });
});
