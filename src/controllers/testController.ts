import { Request, Response } from 'express';
import { User } from '@interface/user';
import { formatResponse } from '@utils/Functions';
import { getUsers } from '@service/userServices';

export async function getCtrl(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const users: Array<User> = (await getUsers())[1];
    const user = users.find((e) => e.id === id);
    res.status(200).send(formatResponse([user]));
}

export async function getAllCtrl(req: Request, res: Response) {
    const users: Array<User> = (await getUsers())[1];
    res.status(200).send(formatResponse(users));
}

export async function postCtrl(req: Request, res: Response) {
    const name = req.body.name;
    const email = req.body.email;
    const users: Array<User> = (await getUsers())[1];
    users.push({ id: users.length + 1, name: name, email: email });
    res.status(200).send(formatResponse(users));
}

export async function putCtrl(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const name = req.body.name;
    const email = req.body.email;
    let users: Array<User> = (await getUsers())[1];
    users = users.map(e => {
        if (e.id === id) {
            e.name = (name) ? name : e.name;
            e.email = (email) ? email : e.email;
        }
        return e;
    });
    res.status(200).send(formatResponse(users));
}

export async function delCtrl(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    let users: Array<User> = (await getUsers())[1];
    users = users.filter(e => e.id !== id);
    res.status(200).send(formatResponse(users));
}
