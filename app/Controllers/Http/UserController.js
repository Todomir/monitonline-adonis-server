/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

class UserController {
  async index() {
    const user = await User.all();
    return user;
  }

  async store({ request }) {
    const {
      name,
      cpf,
      email,
      password,
      course,
      is_tutor,
    } = request.post();
    const user = await User.create({
      name,
      cpf,
      email,
      password,
      course,
      is_tutor,
    });

    return user;
  }

  async show({ params }) {
    const user = await User.findOrFail(params.id);
    return user;
  }

  async update({ request, params }) {
    const user = await User.findOrFail(params.id);
    const {
      name,
      cpf,
      email,
      password,
      course,
      is_tutor,
    } = request.post();

    user.merge({ name, cpf, email, password, course, is_tutor });
    await user.save();

    return user;
  }

  async destroy({ params }) {
    const user = await User.findOrFail(params.id);
    await user.delete();
  }

  async authenticate({ request, auth }) {
    const { email, password } = request.all();
    const token = await auth.attempt(email, password);
    return token;
  }
}

module.exports = UserController;
