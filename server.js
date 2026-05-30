const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_KEY');

// Inside your wss.on('connection', (ws) => { ... })
ws.on('message', async (message) => {
    const data = JSON.parse(message);

    if (data.type === 'chat') {
        // Save to database
        await supabase.from('messages').insert([
            { sender: ws.name, text: data.text, img: data.img, age: ws.age }
        ]);
        
        // Broadcast to everyone
        clients.forEach(c => {
            if (c.age === ws.age) c.send(message);
        });
    }
});