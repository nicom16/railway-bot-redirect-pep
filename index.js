// Express 
const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 5000;
  
app.get('/', (req, res) => {
    const axios = require('axios');
    
    axios.get(req.query.bot_page, {
        params: {
            send: req.query.send,
        },
    }).then((response) => {
        res.send(`Result: ${response.data}`);
    }).catch((err) => {
        res.send(err);
    });
}); 
  
app.listen(PORT, () => { 
  console.log(`App listening on port ${PORT}`); 
});

