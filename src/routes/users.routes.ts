import { Router } from "express";
import { authValidate } from "../controllers/auth.controllers.js";
import { createUser, deleteProfile, showProfile, signIn, updateProfile } from "../controllers/users.controllers.js";

const route: Router = Router();

route
    .post('/create', createUser)
    .post('/sign-in', signIn)
    .all('*', authValidate)
    .get('/me', showProfile)
    .put('update/me', updateProfile)
    .delete('/delete/me', deleteProfile);

export default route;