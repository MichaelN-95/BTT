import * as dotenv from 'dotenv';
dotenv.config();
import * as express from 'express';
import User from './models/user';
import * as morgan from 'morgan';
import * as path from 'path';

import setMongo from './mongo';
import setRoutes from './routes';

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
};

main();

export { app };
