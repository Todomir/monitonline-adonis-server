/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Subject extends Model {
   subjectMatter() {
      return this.hasMany('App/Models/SubjectMatter');
   }
}

module.exports = Subject;
