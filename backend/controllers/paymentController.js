const catchAsyncErrors = require('../middlewares/catchAsyncErrors')

const stripe = require('stripe')("sk_test_51LUwRSSCNA58UXMJ1z5s78WrJ6kSqTKqJxm6VcWmiPDgrvxi6oQucnnQEXSF1bUxesvFanZfHdzdwTowihZZ7r0M00HenxnGi0");

// Process stripe payments   =>   /api/v1/payment/process
exports.processPayment = catchAsyncErrors(async (req, res, next) => {

    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: 'inr',

        metadata: { integration_check: 'accept_a_payment' }
    });

    res.status(200).json({
        success: true,
        client_secret: paymentIntent.client_secret
    })

})

// Send stripe API Key   =>   /api/v1/stripeapi
exports.sendStripApi = catchAsyncErrors(async (req, res, next) => {

    res.status(200).json({
        stripeApiKey: "pk_test_51LUwRSSCNA58UXMJxZCbiwuNoNENUL44KUHpQejYuR5NprNgqEZpUjMqzk6B9Gtiu5RoX8uCojyk1MGWAKg9pplI00wwCMSoeO"
    })

})