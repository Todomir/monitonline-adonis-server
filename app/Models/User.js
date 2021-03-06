/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash');

// referência ao aluno no modelo relacional
class User extends Model {
  static boot() {
    super.boot();

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async userInstance => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password);
      }
    });
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
  tokens() {
    return this.hasMany('App/Models/Token');
  }

  subjectMatters() {
    return this.belongsToMany('App/Models/SubjectMatter').pivotTable('subject_matters_users');
  }

  schedules() {
    return this.hasMany('App/Models/Schedule');
  }

  review() {
    return this.hasOne('App/Models/Review');
  }

  assistance() {
    return this.hasOne('App/Models/Assistance', 'id', 'student_id');
  }

  comments() {
    return this.hasMany('App/Models/Comment');
  }
}

module.exports = User;
