const express = require('express');
const { postUser, getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');

const router = express.Router();


router.route('/')
.post(postUser)
.get(getAllUsers);

router.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

module.exports = router;