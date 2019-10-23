/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Schedule = use('App/Models/Schedule');

/**
 * Resourceful controller for interacting with schedules
 */
class ScheduleController {
  /**
   * Show a list of all schedules.
   * GET schedules
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index() {
    const schedules = await Schedule.query()
      .with('user')
      .fetch();
    return schedules;
  }

  /**
   * Create/save a new schedule.
   * POST schedules
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, auth }) {
    const data = request.only(['schedule_start', 'schedule_end']);
    const schedule = await Schedule.create({
      tutor_id: auth.user.id,
      ...data,
    });
    return schedule;
  }

  /**
   * Display a single schedule.
   * GET schedules/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params }) {
    const schedule = Schedule.findOrFail(params.id);
    return schedule;
  }

  /**
   * Update schedule details.
   * PUT or PATCH schedules/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, auth, request }) {
    const schedule = await Schedule.findOrFail(params.id);
    const data = request.only(['schedule_start', 'schedule_end']);

    schedule.merge(data);
    await schedule.save();

    return schedule;
  }

  /**
   * Delete a schedule with id.
   * DELETE schedules/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const schedule = await Schedule.findOrFail(params.id);
    await schedule.delete();
  }
}

module.exports = ScheduleController;
