'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Comment extends Model {
  assistance() {
    return this.belongsTo('App/Models/Assistance');
  }
}

module.exports = Comment;
