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

Route.post('/users/auth', 'UserController.authenticate');

Route.group(() => {
  Route.resource('users', 'UserController').apiOnly();
});

Route.group(() => {
  Route.resource('subjects', 'SubjectController').apiOnly();
});

Route.group(() => {
  Route.resource(
    'subjectmatters',
    'SubjectMatterController',
  ).apiOnly();
});

Route.group(() => {
  Route.resource('schedules', 'ScheduleController')
    .apiOnly()
    .middleware(['auth']);
});

Route.group(() => {
  Route.resource('assistances/reviews', 'ReviewController')
    .apiOnly()
    .except('store')
    .middleware(['auth']);
  Route.post(
    '/assistances/:assistance_id/reviews',
    'ReviewController.store',
  ).middleware(['auth']);
});
