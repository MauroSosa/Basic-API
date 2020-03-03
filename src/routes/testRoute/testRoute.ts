import express from 'express';
import { getCtrl, postCtrl, putCtrl, delCtrl, getAllCtrl } from '@ctrl/testController';
import { getVal, postVal, putVal, delVal } from './testValidations';

const testRoute = express.Router();

testRoute.get('/:id', getVal, getCtrl);
testRoute.get('/', getAllCtrl);
testRoute.post('/', postVal, postCtrl);
testRoute.put('/:id', putVal, putCtrl);
testRoute.delete('/:id', delVal, delCtrl);

export default testRoute;
