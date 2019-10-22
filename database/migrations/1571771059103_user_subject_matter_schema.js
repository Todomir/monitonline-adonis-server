'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSubjectMatterSchema extends Schema {
  up () {
    this.create('users_subject_matters', (table) => {
      table.integer('user_id')
      table.integer('subject_matter_id')
    })
  }

  down () {
    this.drop('users_subject_matters')
  }
}

module.exports = UserSubjectMatterSchema
