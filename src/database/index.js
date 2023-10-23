const { Sequelize } = require('sequelize');
const configDatabase = require('./config');


const { GestorModel } = require('../models/gestor-model');
const { EventoModel } = require('../models/evento-model');
const { UserModel } = require('../models/user-model');

const database = new Sequelize(configDatabase);


GestorModel.init(database);
EventoModel.init(database);
UserModel.init(database);

module.exports = database;
