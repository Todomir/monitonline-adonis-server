/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

class UserController {
   async index() {
      const user = await User.all();
      return user;
   }

   async store({ request }) {
      const { name, cpf, email, password, course, is_tutor, subject_matters } = request.post();
      const user = await User.create({ name, cpf, email, password, course, is_tutor });

      if (subject_matters && subject_matters.length > 0) {
         if (is_tutor != false) {
            await user.subjectMatters().attach(subject_matters);
            user.subjectMatters = await user.subjectMatters().fetch();
         } else {
            console.log('You must be a tutor to teach a subject matter.');
         }
      }
      return user;
   }

   async show({ params }) {
      const user = await User.findByOrFail(params.id);
      return user;
   }

   async update({ request }) {

      const user = await User.findByOrFail(params.id);
      const { name, cpf, email, password, course, is_tutor, subject_matters } = request.post();

      user.merge({ name, cpf, email, password, course, is_tutor, subject_matters });
      await user.save();

      if (subject_matters && subject_matters.length > 0) {
         if (is_tutor != false) {
            await user.subjectMatters().detach();
            await user.subjectMatters().attach(subject_matters);
            user.subjectMatters = await user.subjectMatters().fetch();
         } else {
            console.log('You must be a tutor to teach a subject matter.');
         }
      }
      return user;
   }

   async destroy({ params }) {
      const user = await User.findByOrFail(params.id);
      await user.delete();
   }
}

module.exports = UserController;
