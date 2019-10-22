/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ScheduleSchema extends Schema {
   up() {
      this.create('schedules', table => {
         table
            .integer('tutor_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
         table.datetime('schedule_start').notNullable();
         table.datetime('schedule_end').notNullable();
         table.timestamps();
      });
   }

   down() {
      this.drop('schedules');
   }
}

module.exports = ScheduleSchema;
