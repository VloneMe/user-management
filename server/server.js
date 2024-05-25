const express = require("express");
const sequelize = require('./src/config/db');
const cors = require('cors');
const User = require("./src/model/User");


sequelize.sync(
    // { force: true}
).then(async () => {
    
    for (let i = 0; i < 23; i++){

        // const user = await User.findOne({wheere: {email: 'user-1@yahoo.com'}})
        // await User.destroy(user);
    }
    console.log('[server]: Database Connected Succesful!')
})

const port = 5000
const server = express();

server.use(express.json());
server.use(cors());

server.use('/api/users', require('./src/Routes/usersRoute'));


server.listen(port, () => {
    console.log(`[server]: Running at http://localhost:${port}`)
});