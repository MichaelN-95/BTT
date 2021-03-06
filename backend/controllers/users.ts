import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import User from '../models/user';
import BaseCtrl from './base';

const secret: jwt.Secret = process.env.SECRET_TOKEN as string;

class UserCtrl extends BaseCtrl {
  model = User;

  login = async (req: Request, res: Response) => {
    try {
      const user = await this.model.findOne({ email: req.body.email });
      if (!user) {
        return res.json({ message: 'Email not found' }).status(403);
      }
      return user.comparePassword(
        req.body.password,
        (error: any, isMatch: boolean) => {
          if (error || !isMatch) {
            return res.sendStatus(403);
          }
          const token = jwt.sign({ user }, secret, { expiresIn: '7d' }); // expires in 7 days
          return res.status(200).json({ token });
        }
      );
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  };

  // this method populates the response with the booked events details
  getBookings = async (req: Request, res: Response) => {
    try {
      const user = await this.model
        .find({ _id: req.params.id })
        .populate('events');
      if (!user) {
        return res.json({ message: 'User not found' }).status(403);
      }
      return res.status(200).json(user);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  };
}

export default UserCtrl;
