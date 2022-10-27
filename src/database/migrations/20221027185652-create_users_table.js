'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
		id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			autoIncrement: true,
			unique: true,
			primaryKey: true
		},
		username: {
			type: Sequelize.STRING,
			allowNull: false
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		isActive: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: false
		}
	})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};
