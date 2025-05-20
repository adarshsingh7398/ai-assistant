





const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// API Route
app.post('/api/message', (req, res) => {
  const userText = (req.body.message || '').toLowerCase();
  let reply = '';

  if (userText.includes('hello') || userText.includes('नमस्ते')) {
    reply = 'नमस्ते! आप कैसे हो?';
  } else if (userText.includes('कैसे हो') || userText.includes('how are you')) {
    reply = 'मैं ठीक हूँ, आप कैसे हो?';
  } else if (userText.includes('time') || userText.includes('समय')) {
    reply = 'अभी समय है ' + new Date().toLocaleTimeString();
  } else if (userText.includes('नाम') || userText.includes('your name')) {
    reply = 'मेरा नाम रोबो असिस्टेंट है!';
  } else {
    reply = `आपने पूछा: "${userText}". इसके बारे में मैं अभी सीख रहा हूँ।`;
  }

  res.json({ reply });
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});






