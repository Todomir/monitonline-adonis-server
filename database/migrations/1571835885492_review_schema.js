/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ReviewSchema extends Schema {
  up() {
    this.create('reviews', table => {
      table.increments();
      table.integer('review');
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
    this.drop('reviews');
  }
}

module.exports = ReviewSchema;
