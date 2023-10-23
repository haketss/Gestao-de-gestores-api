const { Model, DataTypes } = require("sequelize");

const GestorModel = require("../models/gestor-model") 

class EventoModel extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: DataTypes.STRING,
                data: DataTypes.DATE,
                adendo: DataTypes.STRING,
                
            },
            {
                sequelize,
                tableName: "evento",
                timestamps: false,
            }
        );
    }
}

EventoModel.associate = function(models) {
    user.belongsToMany(models.GestorModel, {
      foreignKey: "idGestor", as: "CRM"
    });
  };


module.exports = { EventoModel };
