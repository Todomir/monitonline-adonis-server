/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class SubjectMatter extends Model {
  subject() {
    return this.belongsTo('App/Models/Subject');
  }

  users() {
    return this.belongsToMany('App/Models/User').pivotTable([
      'subject_matters_users',
    ]);
  }

  assistance() {
    return this.hasMany('App/Models/Assistance');
  }
}

module.exports = SubjectMatter;
