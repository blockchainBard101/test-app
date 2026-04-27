const express = require('express');
const app = express();

const APP_NAME = process.env.APP_NAME;
const OWNER = process.env.OWNER;
const VERSION = process.env.VERSION;
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${APP_NAME}</title>
      <style>
        body {
          background-color: #0a0a0b;
          color: #f0f0f2;
          font-family: monospace;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .card {
          background-color: #161618;
          padding: 2rem;
          border-radius: 8px;
          border: 1px solid #27272a;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          min-width: 300px;
          text-align: center;
        }
        h1 {
          color: #10b981;
          margin: 0 0 1rem 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .dot {
          width: 12px;
          height: 12px;
          background-color: #10b981;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 8px #10b981;
        }
        p {
          margin: 0.5rem 0;
          opacity: 0.8;
        }
        .footer {
          margin-top: 1.5rem;
          font-size: 0.85rem;
          color: #71717a;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1><span class="dot"></span>${APP_NAME}</h1>
        <p>Owner: ${OWNER}</p>
        <p>Version: ${VERSION}</p>
        <div class="footer">Running on port ${PORT}</div>
      </div>
    </body>
    </html>
  `;
    res.send(html);
});

app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        app: APP_NAME,
        version: VERSION
    });
});

app.listen(PORT, () => {
    // console.log(`${APP_NAME} v${VERSION} running on port ${PORT}`);
    throw new Error('Fatal: DATABASE_URL is not set')
    // console.log('Starting...');
});
