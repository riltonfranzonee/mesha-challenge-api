import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import FileController from './app/controllers/FileController';
import PatientController from './app/controllers/PatientController';
import ProblemController from './app/controllers/ProblemController';
import ProcedureController from './app/controllers/ProcedureController';
import ServiceController from './app/controllers/ServiceController';

const upload = multer(multerConfig);

const routes = new Router();

routes.post('/files', upload.single('file'), FileController.store);

routes.post('/patients', PatientController.store);

routes.post('/problems', ProblemController.store);

routes.post('/procedures', ProcedureController.store);

routes.get('/services/:id', ServiceController.index);
routes.put('/services', ServiceController.update);

export default routes;
