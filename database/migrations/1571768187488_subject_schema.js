'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubjectSchema extends Schema {
  up () {
    this.create('subjects', (table) => {
      table.increments()
      table.string('subject_description').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('subjects')
  }
}

module.exports = SubjectSchema
