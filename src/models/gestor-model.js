const { Model, DataTypes } = require("sequelize");

const EventoModel = require("../models/evento-model") 

class GestorModel extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: DataTypes.STRING,
                sobrenome: DataTypes.STRING,
                genero: DataTypes.STRING,
                idade: DataTypes.INTEGER,
                dataDeNascimento: DataTypes.DATE,
                localDeTrabalho: DataTypes.STRING,
                CRM: DataTypes.STRING,
                tipoDeContrato: DataTypes.STRING,
                formacao: DataTypes.STRING,
                senhaProvisoria: DataTypes.STRING,
                metas: DataTypes.INTEGER,
                atendimentos: DataTypes.INTEGER,
                eventosP: DataTypes.STRING
            },
            {
                sequelize,
                tableName: "gestor",
                timestamps: false,
            }
        );
    }
}

GestorModel.associate = function(models) {
    user.belongsToMany(models.EventoModel, {
      foreignKey: "idGestor"
    });
  };

module.exports = { GestorModel };


