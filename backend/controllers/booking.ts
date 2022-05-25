/* eslint-disable @typescript-eslint/naming-convention */
import { Request, Response } from 'express';
// eslint-disable-next-line max-len
const stripe = require('stripe')(
  'sk_test_51L2OwuHJaXw5vKnTuklYIZJ9WHC1v9G8PxC7Bjns4y7QhMHy34RVA41gsR0boDg5yJRizgAoY6wcggYSOUTNssBz002VTpSAiD'
);
class BookingCtrl {
  bookEvent = async (req: Request, res: Response) => {
    const { eventId, name, description, price } = req.body;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          name,
          description,
          images: ['https://picsum.photos/200/300/?random'],
          amount: price * 100,
          currency: 'eur',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: process.env.HOST + '/booking/success',
      cancel_url: process.env.HOST + '/booking/fail',
    });

    res.json({
      status: 'ok',
      session,
    });
  };
}

export default BookingCtrl;
