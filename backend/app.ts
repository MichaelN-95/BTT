import * as dotenv from 'dotenv';
dotenv.config();
import * as express from 'express';
import User from './models/user';
import Event from './models/event';
import * as morgan from 'morgan';
import * as path from 'path';

import setMongo from './mongo';
import setRoutes from './routes';
import { examples } from './pop';
const app = express();
app.set('port', process.env.PORT || 3000);
app.use('/', express.static(path.join(__dirname, '../btt')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

const main = async (): Promise<any> => {
  try {
    await setMongo();
    setRoutes(app);
    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, '../btt/index.html'));
    });
    app.listen(app.get('port'), () =>
      console.log(`Better Ticket Tracker Available on port ${app.get('port')}`)
    );
  } catch (err) {
    console.error(err);
  }
  const admin = await User.findOne({ email: process.env.ADMIN_EMAIL });
  if (!admin) {
    try {
      await User.create({
        username: 'admin',
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD,
        role: 'admin',
      });
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log('Admin already exist!s');
  }

  const events = await Event.find({});
  if (!events.length) {
    try {
      await Event.insertMany(examples);
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log('Events already exist');
  }
};

main();

export { app };
