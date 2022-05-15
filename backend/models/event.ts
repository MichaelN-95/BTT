import { Document, model, Schema } from 'mongoose';

const eventSchema = new Schema<IEvent>({
  name: String,
  description: String,
  date: Date,
  location: String,
  image: String,
  price: Number,
  createdAt: Date,
  updatedAt: Date,
});

interface IEvent extends Document {
  _id: any;
  name: string;
  description: string;
  date: Date;
  location: string;
  image: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const Event = model<IEvent>('Event', eventSchema);

export default Event;
