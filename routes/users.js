import express from 'express';

import { createUser , getUsers , getuserbyid , updateUser , deleteUser } from '../controller/users.js';

const router = express.Router();

let users = [];

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getuserbyid);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);


export default router;

