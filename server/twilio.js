// run this with -> node twilio.js

const twilio = require('twilio');
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

client.messages.create({
    from: '+12565738307',
    body: 'Test message from Twilio',
    to: '+8801533477856' // Replace with a valid phone number
})
    .then(message => console.log('Message sent! SID:', message.sid))
    .catch(error => console.error('Error sending message:', error.message));
