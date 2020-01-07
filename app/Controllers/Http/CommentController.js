/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Comment = use('App/Models/Comment');

/**
 * Resourceful controller for interacting with comments
 */
class CommentController {
  /**
   * Show a list of all comments.
   * GET comments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index() {
    const comments = await Comment.query()
      .with('assistance')
      .fetch();
    return comments;
  }

  /**
   * Create/save a new comment.
   * POST comments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, auth, params }) {
    const { content } = request.post();
    const comment = await Comment.create({
      user_id: auth.user.id,
      assistance_id: params.assistance_id,
      content
    });
    return comment;
  }

  /**
   * Display a single comment.
   * GET comments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params }) {
    const comment = Comment.findOrFail(params.id);
    return comment;
  }

  async getCommentsBySubjectMatterId({ params, request }) {
    const { tutor_id } = request.post();
    const comments = await Comment.query()
      .with('user')
      .innerJoin('assistances', 'comments.assistance_id', 'assistances.id')
      .innerJoin('subject_matters', 'assistances.subject_matter_id', 'subject_matters.id')
      .select('comments.id', 'comments.content', 'comments.user_id', 'comments.assistance_id')
      .where('subject_matters.id', params.subject_matter_id)
      .where('assistances.tutor_id', tutor_id)
      .fetch();
    return comments;
  }

  /**
   * Update comment details.
   * PUT or PATCH comments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const comment = await Comment.findOrFail(params.id);
    const { content } = request.post();

    comment.merge(content);
    await comment.save();

    return comment;
  }

  /**
   * Delete a comment with id.
   * DELETE comments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params }) {
    const comment = Comment.findOrFail(params.id);
    await comment.delete();
  }
}

module.exports = CommentController;
