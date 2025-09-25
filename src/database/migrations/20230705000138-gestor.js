/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('gestors', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                unique: true
            },
            nome: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            sobrenome: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            idade: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            genero: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            dataDeNascimento: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            localDeTrabalho: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            CRM: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            tipoDeContrato: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            formacao: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            senhaProvisoria: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            metas: {
                type: Sequelize.JSON,
                allowNull: true,
            },
            atendimentos: {
                type: Sequelize.JSON,
                allowNull: true,
            },
            eventosP: {
                type: Sequelize.JSON,
                allowNull: true,
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('gestors');
    }
};