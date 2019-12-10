
/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AddStatusFkOnAssistancesSchema extends Schema {
  up () {
    this.alter('assistances', (table) => {
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

  down () {
    this.alter('assistances', (table) => {
      table.dropColumn('status_id');
    });
  }
}

module.exports = AddStatusFkOnAssistancesSchema;
