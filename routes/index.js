const express = require('express');
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import FilesController from '../controllers/FilesController';


const routes = express.Router();

routes.get('/status', (req, res)=>{
    AppController.getStatus(req, res);
});
routes.get('/stats', (req, res)=>{
    AppController.getStats(req, res);
});

routes.post('/users', (req, res)=>{
    UsersController.postNew(req, res);
});
routes.get('/connect', (req, res)=>{
    AuthController.getConnect(req, res);
});

routes.get('/users/me', (req, res)=>{
    AuthController.getDisconnect(req, res);
});

routes.get('/connect', (req, res)=>{
    AuthController.getMe(rq, res);
});
routes.post('/files', (req, res)=>{
    FilesController.postUpload(req, res);
});
export default routes;