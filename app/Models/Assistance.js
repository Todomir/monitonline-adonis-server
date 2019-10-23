'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Assistance extends Model {
  reviews() {
    return this.hasMany('App/Models/Review');
  }
  student() {
    return this.belongsTo('App/Models/User');
  }
  subjectMatter() {
    return this.belongsTo('App/Models/SubjectMatter');
  }
  schedule() {
    return this.belongsTo('App/Models/Schedule');
  }
}

module.exports = Assistance;
