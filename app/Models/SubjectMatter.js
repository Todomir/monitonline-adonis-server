'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SubjectMatter extends Model {
  subject (){
    return this.belongsTo('App/Model/Subject')
  }
}

module.exports = SubjectMatter
