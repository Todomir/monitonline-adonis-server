'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Comment extends Model {
  assistance() {
    return this.belongsTo('App/Models/Assistance');
  }

  user() {
    return this.belongsTo('App/Models/User');
  }
}

module.exports = Comment;
