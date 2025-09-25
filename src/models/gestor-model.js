const { Model, DataTypes } = require("sequelize");

class GestorModel extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: DataTypes.STRING,
                sobrenome: DataTypes.STRING,
                idade: DataTypes.INTEGER,
                genero: DataTypes.STRING,
                dataDeNascimento: DataTypes.DATE,
                localDeTrabalho: DataTypes.STRING,
                CRM: DataTypes.STRING,
                tipoDeContrato: DataTypes.STRING,
                formacao: DataTypes.STRING,
                senhaProvisoria: DataTypes.STRING,
                metas: DataTypes.JSON,
                atendimentos: DataTypes.JSON,
                eventosP: DataTypes.JSON,
            },
            {
                sequelize,
                tableName: "gestors",
                timestamps: true,
            }
        );
    }
}

module.exports = { GestorModel };