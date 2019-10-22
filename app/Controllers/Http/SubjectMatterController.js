'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const SubjectMatter = use('App/Models/SubjectMatter')

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
  async index () {
    const subjectMatters = await SubjectMatter.all()
    return subjectMatters
  }

  /**
   * Create/save a new subjectmatter.
   * POST subjectmatters
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only(['subject_matter_description', 'subject_id'])
    const subjectMatter = await SubjectMatter.create(data)
    return subjectMatter
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
  async show ({ params, request, response, view }) {
  }

  /**
   * Update subjectmatter details.
   * PUT or PATCH subjectmatters/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a subjectmatter with id.
   * DELETE subjectmatters/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = SubjectMatterController
