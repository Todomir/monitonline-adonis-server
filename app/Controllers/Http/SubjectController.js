'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */


/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Subject = use('App/Models/Subject')

/**
 * Resourceful controller for interacting with subjects
 */
class SubjectController {
  /**
   * Show a list of all subjects.
   * GET subjects
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const subjects = await Subject.all()
    return subjects
  }


  /**
   * Create/save a new subject.
   * POST subjects
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  
  async store ({ request }) {
    const data = request.only(['subject_description'])
    const subject = await Subject.create(data)
    return subject
  }

  /**
   * Display a single subject.
   * GET subjects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const subject = await Subject.findByOrFail(params.id)
    return subject
  }


  /**
   * Update subject details.
   * PUT or PATCH subjects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    
  }

  /**
   * Delete a subject with id.
   * DELETE subjects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const subject = await Subject.findByOrFail(params.id)
    await subject.delete()
  }
}

module.exports = SubjectController
