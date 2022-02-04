const server = require('./src/app.js');
const db = require('./src/db.js');
const axios = require('axios');


db.sync({ force:true }).then(() => {
    server.listen(3001, () => {
        console.log('is listening at 3001');
    })
})