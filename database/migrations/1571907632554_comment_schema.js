'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CommentSchema extends Schema {
  up() {
    this.create('comments', table => {
      table.increments();
      table.string('content').notNullable();
      table
        .integer('assistance_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('assistances')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.timestamps();
    });
  }

  down() {
    this.drop('comments');
  }
}

module.exports = CommentSchema;
