const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Chat endpoint
app.post('/chat', (req, res) => {
    const userMessage = req.body.message;
    // Logic for handling chat message goes here
    res.json({ reply: 'Response to: ' + userMessage });
});

// TTS (Text-to-Speech) endpoint
app.post('/tts', (req, res) => {
    const text = req.body.text;
    // Logic for handling TTS goes here
    res.json({ spokenText: text });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
