'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SubjectMatter extends Model {
  subject(){
    return this.belongsTo('App/Models/Subject')
  }

  users(){
    return this.belongsToMany('App/Models/User').pivotTable('users_subject_matters')
  }
}

module.exports = SubjectMatter
