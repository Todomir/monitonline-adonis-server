'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Assistance = use('App/Models/Assistance');

/**
 * Resourceful controller for interacting with assistances
 */
class AssistanceController {
  /**
   * Show a list of all assistances.
   * GET assistances
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index() {
    const assistances = await Assistance.all();
    return assistances;
  }

  /**
   * Create/save a new assistance.
   * POST assistances
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, auth, params }) {
    const data = request.only(['subject_matter_id', 'schedule_id']);
    const assistance = await Assistance.create({
      student_id: auth.user.id,
      tutor_id: params.tutor_id,
      ...data
    });

    return assistance;
  }

  /**
   * Display a single assistance.
   * GET assistances/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params }) {
    const assistance = Assistance.findOrFail(params.id);
    return assistance;
  }

  /**
   * Update assistance details.
   * PUT or PATCH assistances/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request }) {
    const assistance = await Assistance.findOrFail(params.id);
    const data = request.only([
      'student_id',
      'tutor_id',
      'subject_matter_id',
      'schedule_id'
    ]);

    assistance.merge(data);
    await assistance.save();

    return assistance;
  }

  /**
   * Delete a assistance with id.
   * DELETE assistances/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params }) {
    const assistance = await Assistance.findOrFail(params.id);
    await assistance.delete();
  }
}

module.exports = AssistanceController;
