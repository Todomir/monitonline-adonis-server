/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AddStatusIdOnAssistanceSchema extends Schema {
  up() {
    this.alter('assistances', table => {
      table
        .integer('status_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('status')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
  }

  down() {
    this.alter('assistances', table => {
      table.drop('status_id');
    });
  }
}

module.exports = AddStatusIdOnAssistanceSchema;
