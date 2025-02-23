
const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const axios = require('axios');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); 


const TEST_APP_ID = "TEST10456475f4ceec391643749d638157465401";
const TEST_SECRET_KEY = "cfsk_ma_test_a42ae90e41bdacd0b392ea271effefe1_50cf100d";
const CASHFREE_API_BASE = 'https://sandbox.cashfree.com/pg';


app.post('/api/create-order', async (req, res) => {
    try {
        const orderId = 'test_order_' + Date.now();
        
        const orderPayload = {
            order_id: orderId,
            order_amount: req.body.amount,
            order_currency: req.body.currency,
            customer_details: {
                customer_id: req.body.customer_details.customer_id,
                customer_name: req.body.customer_details.customer_name,
                customer_email: req.body.customer_details.customer_email,
                customer_phone: req.body.customer_details.customer_phone
            },
            order_meta: {
                return_url: `http://localhost:3000/payment-status?order_id={order_id}`,
                notify_url: 'http://localhost:3000/api/payment-webhook'
            }
        };

        const response = await axios.post(
            `${CASHFREE_API_BASE}/orders`,
            orderPayload,
            {
                headers: {
                    'x-api-version': '2022-09-01',
                    'x-client-id': TEST_APP_ID,
                    'x-client-secret': TEST_SECRET_KEY,
                    'Content-Type': 'application/json'
                }
            }
        );

        console.log('Order created successfully:', orderId);
        res.json({
            order_id: orderId,
            payment_session_id: response.data.payment_session_id
        });

    } catch (error) {
        console.error('Error creating order:', error.response?.data || error.message);
        res.status(500).json({
            error: 'Failed to create order',
            details: error.response?.data || error.message
        });
    }
});

app.post('/api/payment-webhook', (req, res) => {
    console.log('Received webhook:', req.body);
    res.json({ status: 'Webhook received' });
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'paymentPage.html'));
});


app.get('/payment-status', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'payment-status.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});