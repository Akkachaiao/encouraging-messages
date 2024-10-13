export default function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;
    console.log('Received message:', message);

    // ตัดโค้ดการเชื่อมต่อกับ WebSocket ชั่วคราว
    // res.status(200).json({ status: 'Message sent to TouchDesigner' });
    res.status(200).json({ status: 'Message received' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
