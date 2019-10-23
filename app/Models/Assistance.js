'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Assistance extends Model {
  reviews() {
    return this.hasMany('App/Models/Review');
  }
}

module.exports = Assistance;
