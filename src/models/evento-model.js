const { Model, DataTypes } = require("sequelize");

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
                tableName: "eventos",
                timestamps: true,
            }
        );
    }
}

module.exports = { EventoModel };
