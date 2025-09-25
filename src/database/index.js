const { Sequelize } = require('sequelize');
const configDatabase = require('./config');

const { GestorModel } = require('../models/gestor-model');
const { UserModel } = require('../models/user-model');
const { EventoModel } = require('../models/evento-model');

const database = new Sequelize(configDatabase);

GestorModel.init(database);
UserModel.init(database);
EventoModel.init(database);

module.exports = database;
