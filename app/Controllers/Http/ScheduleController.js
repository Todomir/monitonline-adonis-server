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
      const schedule = await Schedule.create({ user_id: auth.user_id, ...data });
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
   async show({ params, request, response, view }) {}

   /**
    * Update schedule details.
    * PUT or PATCH schedules/:id
    *
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Response} ctx.response
    */
   async update({ params, request, response }) {}

   /**
    * Delete a schedule with id.
    * DELETE schedules/:id
    *
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Response} ctx.response
    */
   async destroy({ params, request, response }) {}
}

module.exports = ScheduleController;
