/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Review = use('App/Models/Review');

/**
 * Resourceful controller for interacting with reviews
 */
class ReviewController {
  /**
   * Show a list of all reviews.
   * GET reviews
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index() {
    const reviews = await Review.query()
      .with('user')
      .fetch();
    return reviews;
  }

  /**
   * Create/save a new review.
   * POST reviews
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, auth, params }) {
    const data = request.only(['review']);
    const review = await Review.create({
      user_id: auth.user.id,
      assistance_id: params.assistance_id,
      ...data
    });
    return review;
  }

  /**
   * Display a single review.
   * GET reviews/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params }) {
    const review = Review.findOrFail(params.id);
    return review;
  }

  /**
   * Update review details.
   * PUT or PATCH reviews/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request }) {
    const review = await Review.findOrFail(params.id);
    const data = request.only(['review']);

    review.merge(data);
    await review.save();

    return review;
  }

  /**
   * Delete a review with id.
   * DELETE reviews/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params }) {
    const review = await Review.findOrFail(params.id);
    await review.delete();
  }

  async getReviewBySubjectId({ params }) {
    const review = await Review.query()
      .innerJoin('assistances', 'reviews.assistance_id', 'assistances.id')
      .innerJoin('subject_matters', 'assistances.subject_matter_id', 'subject_matter.id')
      .innerJoin('subjects', 'subject_matters.subject_id', 'subjects.id')
      .select(
        'review.id as review_id',
        'reviews.review',
        'reviews.assistance_id',
        'reviews.user_id',
        'subjects.id as subject_id',
        'subjects.subject_description'
      )
      .where('subject.id', params.subject_id);
  }
}

module.exports = ReviewController;
