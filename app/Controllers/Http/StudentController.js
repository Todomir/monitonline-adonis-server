'use strict'

const Student = use('App/Models/Student')

class StudentController {
  async create({ request }){
    const data = request.body
    const user = await Student.create(data)
    return user
  }
}

module.exports = StudentController
