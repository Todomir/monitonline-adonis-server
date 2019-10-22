/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const SubjectMatter = use('App/Models/SubjectMatter')

class FindSubjectMatter {
  async handle ({ request, response, params: { id } }, next){
    const subjectMatter = await SubjectMatter.find(id)

    if (!subjectMatter){
      return response.status(404).json({
        message: "Subject Matter does not exist.",
        id
      })
    }

    request.body.subject_matter = subjectMatter
    await next
  }
}

module.exports = FindSubjectMatter