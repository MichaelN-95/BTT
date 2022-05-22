import { Document, model, Schema } from 'mongoose';
import Users from './user';

const eventSchema = new Schema<IEvent>({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: String,
  image: String,
  price: Number,
  createdAt: { type: Date, default: Date.now, immutable: true },
  updatedAt: { type: Date, default: Date.now },
  attendees: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

interface IEvent extends Document {
  name: string;
  description: string;
  date: Date;
  location: string;
  image: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  attendees: { type: Schema.Types.ObjectId };
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const Event = model<IEvent>('Event', eventSchema);

export default Event;
