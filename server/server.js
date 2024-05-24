const express = require("express");
const sequelize = require('./src/config/db');
const User = require("./src/model/User");


sequelize.sync(
    // { force: true}
).then(() => {
    console.log('[server]: Database Connected Succesful!')
})

const port = 4000
const server = express();

server.use(express.json());

server.use('/api/users', require('./src/Routes/usersRoute'));


server.listen(port, () => {
    console.log(`[server]: Running at http://localhost:${port}`)
});