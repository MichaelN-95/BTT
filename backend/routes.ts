import { Router, Application } from 'express';

import UserCtrl from './controllers/users';
import EventCtrl from './controllers/event';

const setRoutes = (app: Application): void => {
  const router = Router();
  const userCtrl = new UserCtrl();
  const eventCtrl = new EventCtrl();
  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);
  router.route('/user/:id/events').get(userCtrl.getBookings);

  //events
  router.route('/events').get(eventCtrl.getAll);
  router.route('/events/count').get(eventCtrl.count);
  router.route('/event').post(eventCtrl.insert);
  router.route('/event/:id').get(eventCtrl.get);
  router.route('/event/:id').put(eventCtrl.update);
  router.route('/event/:id').delete(eventCtrl.delete);
  router.route('/event/:id/attendees').get(eventCtrl.getAttendees);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);
};

export default setRoutes;
