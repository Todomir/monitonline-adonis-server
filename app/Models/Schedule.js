/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Schedule extends Model {
  user() {
    return this.belongsTo('App/Models/User');
  }

  assistance() {
    return this.hasOne('App/Models/Assistance');
  }
}

module.exports = Schedule;
