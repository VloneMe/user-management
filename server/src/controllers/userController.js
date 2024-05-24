const User = require("../model/User");


const postUser = ('/users', async (req, res) => {
    await User.create(req.body);
    res.send('User is Inserted!');
})

const getAllUsers = ('/users', async (req, res) => {
    const users = await User.findAll();
    res.send(users);
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