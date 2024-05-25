const User = require("../model/User");
const bcrypt = require('bcrypt');


const postUser = ('/users', async (req, res) => {

    const {username, email, password} = req.body;

    const hashedPwd = await bcrypt.hash(password, 10);
    await User.create({
        username, email, password: hashedPwd
    });
    res.send('User is Inserted!');
})

const getAllUsers = ('/users', async (req, res) => {

    const pageAsNum = Number.parseInt(req.query.page);
    const sizeAsNum = Number.parseInt(req.query.size);  

    let page = 0;
    if (!Number.isNaN(pageAsNum) && pageAsNum > 0){
        page = pageAsNum;
    };

    let size = 10;
    if (!Number.isNaN(sizeAsNum) && sizeAsNum > 0 && sizeAsNum < 10){
        size = sizeAsNum;
    }

    const users = await User.findAndCountAll({
        limit: size,
        offset: page * size
    });
    res.send({
        content: users.rows,
        totalPages: Math.ceil(users.count / size)
    });
});

const getUserById = ('/users/:id', async (req, res) => {
    const reqID = req.params.id;
    const user = await User.findOne({where: {id: reqID}})
    res.send(user);
})

const updateUser = ('/users/:id', async (req, res) => {
    const reqID = req.params.id;
    const user = await User.findOne({where: {id: reqID}})
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;
    await user.save();
    res.send("User succesful Updated!");
});

const deleteUser = ('/users/:id', async (req, res) => {
    const reqID = req.params.id;
    const user = await User.destroy({where: {id: reqID}})
    res.send({"User Deleted": user});
});

module.exports = {
    postUser, getAllUsers, getUserById, updateUser, deleteUser
}