/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

// referência ao aluno no modelo relacional
class UserSchema extends Schema {
  up() {
    this.create('users', table => {
      table.increments();
      table
        .string('name')
        .notNullable()
        .unique();
      table
        .string('cpf')
        .notNullable()
        .unique();
      table
        .string('email')
        .notNullable()
        .unique();
      table.string('password').notNullable();
      table.integer('course').notNullable();
      table.boolean('is_tutor').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('users');
  }
}

module.exports = UserSchema;
