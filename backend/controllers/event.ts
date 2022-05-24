import Event from '../models/event';
import BaseCtrl from './base';
import { Request, Response } from 'express';

import { examples } from '../pop';
class EventCtrl extends BaseCtrl {
  model = Event;

  getAttendees = async (req: Request, res: Response) => {
    try {
      const attendees = await this.model
        .find({ _id: req.params.id })
        .populate('attendees');
      if (!attendees) {
        return res.json({ message: 'Event not found' }).status(403);
      }
      return res.status(200).json(attendees);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  };

  insertMany = async (req: Request, res: Response) => {
    try {
      const obj = await this.model.insertMany(examples);
      return res.status(201).json(obj);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  };
}

export default EventCtrl;
