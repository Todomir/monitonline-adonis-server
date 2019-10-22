'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

//referência ao aluno no modelo relacional
class Student extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the Student password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (studentInstance) => {
      if (studentInstance.dirty.password) {
        studentInstance.password = await Hash.make(studentInstance.password)
      }
    })
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = User
