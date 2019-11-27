/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.group(() => {
  Route.resource('users', 'UserController').apiOnly();

  Route.post('/users/auth', 'UserController.authenticate');
  Route.post(
    '/users/fetchUsersByDescription',
    'UserController.fetchUsersBySubjectMatterDescription'
  );
  Route.get('/users/auth/getUser', 'UserController.getAuthenticadedUser').middleware(['auth']);
});

Route.group(() => {
  Route.resource('subjects', 'SubjectController').apiOnly();
});

Route.group(() => {
  Route.resource('subjectmatters', 'SubjectMatterController').apiOnly();
  Route.post('/subjects/subjectmatters', 'SubjectMatterController.fetchBySubjectId');
});

Route.group(() => {
  Route.resource('schedules', 'ScheduleController')
    .apiOnly()
    .middleware(['auth']);
  Route.get('/users/schedules/:tutor_id', 'ScheduleController.fetchByUserId');
});

Route.group(() => {
  Route.resource('assistances/reviews', 'ReviewController')
    .apiOnly()
    .except('store')
    .middleware(['auth']);
  Route.post('/assistances/:assistance_id/reviews', 'ReviewController.store').middleware(['auth']);
});

Route.group(() => {
  Route.resource('assistances', 'AssistanceController')
    .apiOnly()
    .except('store')
    .middleware(['auth']);
  Route.post('/assistances/:tutor_id', 'AssistanceController.store').middleware(['auth']);
  Route.get(
    '/user/assistances/tutor/:tutor_id',
    'AssistanceController.getAssistanceByTutorId'
  ).middleware(['auth']);
  Route.get(
    '/user/assistances/student/:student_id',
    'AssistanceController.getAssistanceByStudentId'
  ).middleware(['auth']);
});

Route.group(() => {
  Route.resource('comments', 'CommentController')
    .apiOnly()
    .except('store')
    .middleware(['auth']);
  Route.post('/comments/:assistance_id', 'CommentController.store').middleware(['auth']);
  Route.get('/comments/schedule/:schedule_id', 'CommentController.getByScheduleId').middleware([
    'auth'
  ]);
});
