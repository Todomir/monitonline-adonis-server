'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Review extends Model {
  user() {
    return this.belongsTo('App/Model/User');
  }

  assistance() {
    return this.belongsTo('App/Model/Assistance');
  }
}

module.exports = Review;
