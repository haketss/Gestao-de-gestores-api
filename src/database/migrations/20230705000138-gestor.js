


/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('gestor', {
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
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            atendimentos: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            eventosP: {
                type: Sequelize.STRING,
                allowNull: true,
            }
                       
        });
    },



    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('gestor');
    }
};
