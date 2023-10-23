'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('evento', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            data: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            adendo: {
                type: Sequelize.STRING,
                allowNull: true,
            }            
        });
    },
    

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('evento');
    }
};
