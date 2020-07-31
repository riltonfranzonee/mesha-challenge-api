import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import FileController from './app/controllers/FileController';
import PatientController from './app/controllers/PatientController';

const upload = multer(multerConfig);

const routes = new Router();

routes.post('/files', upload.single('file'), FileController.store);

routes.post('/patients', PatientController.store);

export default routes;
