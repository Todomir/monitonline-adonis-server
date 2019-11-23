/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AssistanceSchema extends Schema {
  up() {
    this.create('assistances', table => {
      table.increments();

      table
        .integer('tutor_id')
        .unsigned()
        .notNullable()
        .references('tutor_id')
        .inTable('schedules')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

      table
        .integer('student_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

      table
        .integer('subject_matter_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('subject_matters')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

      table
        .integer('schedule_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('schedules')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

      table
        .integer('status_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('status')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

      table.timestamps();
    });
  }

  down() {
    this.drop('assistances');
  }
}

module.exports = AssistanceSchema;
