// api/server.js
module.exports = (req, res) => {
    // Set CORS headers so your frontend can talk to this API
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Logic for your server
    if (req.method === 'GET') {
        return res.status(200).json({ status: 'Pilot Platform Server is active' });
    }

    res.status(405).json({ error: 'Method not allowed' });
};