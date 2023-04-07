import { Request, Response } from "express";
import httpStatus from "http-status"

function createUser(req: Request, res: Response) {
    res.status(httpStatus.OK).send('createUser')
};

function signIn(req: Request, res: Response) {
    res.status(httpStatus.OK).send('signIn')
};

function showProfile(req: Request, res: Response) {
    res.status(httpStatus.OK).send('showProfile')
};

function updateProfile(req: Request, res: Response) {
    res.status(httpStatus.OK).send('updateProfile')
};

function deleteProfile(req: Request, res: Response) {
    res.status(httpStatus.OK).send('deleteProfile')
};

export {
    createUser,
    signIn,
    showProfile,
    updateProfile,
    deleteProfile
}