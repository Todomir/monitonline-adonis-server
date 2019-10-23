/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSubjectMatterSchema extends Schema {
  up() {
    this.create('subject_matters_users', table => {
      table.increments();
      table
        .integer('subject_matter_id')
        .unsigned()
        .index('subject_matter_id')
        .references('id')
        .inTable('subject_matters')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('user_id')
        .unsigned()
        .index('user_id')
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
  }

  down() {
    this.drop('users_subject_matters');
  }
}

module.exports = UserSubjectMatterSchema;
