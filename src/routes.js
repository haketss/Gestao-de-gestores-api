const { Router, request } = require('express');

const { GestorController } = require('./controllers/gestor');
const { UserController } = require('./controllers/user');
const { authMiddleware } = require('./middleware/auth-middleware');
const { EventoController } = require('./controllers/evento');

const routes = Router();

const gestorController = new GestorController();
const userController = new UserController();
const eventoController = new EventoController();

routes.post('/gestor', authMiddleware, gestorController.create);
routes.get('/gestors', authMiddleware, gestorController.getAll);
routes.delete('/gestor/:id', authMiddleware, gestorController.delete);
routes.put('/gestor/:id', authMiddleware, gestorController.update);

routes.post('/evento', authMiddleware, eventoController.create);
routes.get('/eventos', authMiddleware, eventoController.getAll);
routes.put('/evento/:id', authMiddleware, eventoController.update);
routes.delete('/evento/:id', authMiddleware, eventoController.delete);

routes.post('/register', userController.register);
routes.post('/login', userController.login);
routes.get('/login', authMiddleware, userController.getAll);

module.exports = { routes };
