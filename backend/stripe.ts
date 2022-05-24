/* eslint-disable @typescript-eslint/naming-convention */
// This is your test secret API key.

import { Request, Response } from 'express';

// eslint-disable-next-line max-len
const stripe = require('stripe')(
  'sk_test_51L2OwuHJaXw5vKnTuklYIZJ9WHC1v9G8PxC7Bjns4y7QhMHy34RVA41gsR0boDg5yJRizgAoY6wcggYSOUTNssBz002VTpSAiD'
);
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req: Request, res: Response) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));
