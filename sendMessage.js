export default function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;

    // ส่งข้อความไปยัง TouchDesigner (ตัวอย่างใช้ WebSocket)
    const WebSocket = require('ws');
    const ws = new WebSocket('ws://your-touchdesigner-websocket-url'); // URL WebSocket ของ TouchDesigner

    ws.on('open', function open() {
      ws.send(JSON.stringify({ message }));
    });

    ws.on('close', () => {
      console.log('Connection closed');
    });

    res.status(200).json({ status: 'Message sent to TouchDesigner' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}