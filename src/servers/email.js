const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/send-email', (req, res) => {
    const { selectedService } = req.body;

    // Use a service like SendGrid, Mailgun, etc. to send the email
    // ...

    res.json({ success: true });
});

app.listen(3001, () => {
    console.log('Server started on port 3001');
});
