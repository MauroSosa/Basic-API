import Validator from 'fastest-validator';
import { Response, Request, NextFunction } from 'express';
import { formatResponse, toJson } from '@utils/Functions';
let v = new Validator();

const getPattern = {
    id: {
        type: 'number',
        empty: false
    }
};

export function getVal(req: Request, res: Response, next: NextFunction) {
    let id = parseInt(req.params.id);
    let result = (v.validate({ id }, getPattern));
    if (result !== true) {
        return res.status(400).send(formatResponse([], toJson(result), 'Validation error'));
    }
    return next();
}

const postPattern = {
    name: {
        type: 'string',
        empty: false
    },
    email: {
        type: 'string',
        empty: false
    }
};

export function postVal(req: Request, res: Response, next: NextFunction) {
    let name = req.body.name;
    let email = req.body.email;
    let result = (v.validate({ name, email }, postPattern));
    if (result !== true) {
        return res.status(400).send(formatResponse([], toJson(result), 'Validation error'));
    }
    return next();
}

const putPattern = {
    id: {
        type: 'number',
        empty: false
    },
    name: {
        type: 'string',
        empty: false,
        optional: true
    },
    email: {
        type: 'string',
        empty: false,
        optional: true
    }
};

export function putVal(req: Request, res: Response, next: NextFunction) {
    let id = parseInt(req.params.id);
    let name = req.body.name;
    let email = req.body.email;
    let result = (v.validate({ id, name, email }, putPattern));
    if (result !== true) {
        return res.status(400).send(formatResponse([], toJson(result), 'Validation error'));
    }
    return next();
}

const deletePattern = {
    id: {
        type: 'number',
        empty: false
    }
};

export function delVal(req: Request, res: Response, next: NextFunction) {
    let id = parseInt(req.params.id);
    let result = (v.validate({ id }, deletePattern));
    if (result !== true) {
        return res.status(400).send(formatResponse([], toJson(result), 'Validation error'));
    }
    return next();
}
