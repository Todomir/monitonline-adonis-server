/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Status extends Model {
  assistance() {
    return this.hasOne('App/Models/Assistance', 'id', 'status_id');
  }
}

module.exports = Status;
