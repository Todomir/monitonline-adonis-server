/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const SubjectMatter = use('App/Models/SubjectMatter');

/**
 * Resourceful controller for interacting with subjectmatters
 */
class SubjectMatterController {
  /**
   * Show a list of all subjectmatters.
   * GET subjectmatters
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index() {
    const subjectMatters = await SubjectMatter.query()
      .with('subject')
      .fetch();

    return subjectMatters;
  }

  async fetchBySubjectId({ request }) {
    const { subject_id } = request.post();

    const subjectMatters = await SubjectMatter.query()
      .where('subject_id', subject_id)
      .fetch();

    return subjectMatters;
  }

  /**
   * Create/save a new subjectmatter.
   * POST subjectmatters
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request }) {
    const data = request.only(['subject_matter_description', 'subject_id']);
    const subjectMatter = await SubjectMatter.create(data);
    return subjectMatter;
  }

  /**
   * Display a single subjectmatter.
   * GET subjectmatters/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params }) {
    const subjectMatter = await SubjectMatter.findOrFail(params.id);
    return subjectMatter;
  }

  /**
   * Update subjectmatter details.
   * PUT or PATCH subjectmatters/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request }) {
    const subjectMatter = await SubjectMatter.findOrFail(params.id);
    const data = request.only(['subject_matter_description']);

    subjectMatter.merge(data);
    await subjectMatter.save();

    return subjectMatter;
  }

  /**
   * Delete a subjectmatter with id.
   * DELETE subjectmatters/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params }) {
    const subjectMatter = await SubjectMatter.findOrFail(params.id);
    await subjectMatter.delete();
  }
}

module.exports = SubjectMatterController;
