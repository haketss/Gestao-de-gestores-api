const { Router, request } = require('express');


const { EventoController } = require('./controllers/evento');
const { GestorController } = require('./controllers/gestor');
const { UserController } = require('./controllers/user');
const { authMiddleware } = require('./middleware/auth-middleware');

const routes = Router();


const eventoController = new EventoController();
const gestorController = new GestorController();
const userController = new UserController();


routes.post('/gestor', authMiddleware, gestorController.create);
routes.get('/gestors', authMiddleware, gestorController.getAll);
routes.delete('/gestor/:id', authMiddleware, gestorController.delete);
routes.put('/gestor/:id', authMiddleware, gestorController.update);

routes.post('/evento', authMiddleware, eventoController.create);
routes.get('/eventos', authMiddleware, eventoController.getAll);
routes.delete('/evento/:id', authMiddleware, eventoController.delete);
routes.put('/evento/:id', authMiddleware, eventoController.update);

routes.post('/register', userController.register);
routes.post('/login', userController.login);

module.exports = { routes };
