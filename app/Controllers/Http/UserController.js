'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User')

class UserController {
  async store({ request }){
    const { name, cpf, email, password, course, is_tutor, subjectMatters} = request.post()
    const user = await User.create({ name, cpf, email, password, course, is_tutor})

    if (subjectMatters && subjectMatters.length > 0){

      if(is_tutor != false){
        await user.subjectMatters().attach(subjectMatters)
        user.subjectMatters = await user.subjectMatters().fetch()
      } else {
        console.log('You must be a tutor to teach a subject matter.')
      }
      
    }
    return user
  }
}

module.exports = UserController
