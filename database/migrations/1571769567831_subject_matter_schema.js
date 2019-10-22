'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubjectMatterSchema extends Schema {
  up () {
    this.create('subject_matters', (table) => {
      table.increments()
      table.integer('subject_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('subjects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('subject_matter_description').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('subject_matters')
  }
}

module.exports = SubjectMatterSchema
