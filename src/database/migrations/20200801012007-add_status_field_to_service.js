module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('services', 'status', {
      type: Sequelize.STRING,
      defaultValue: 'progress',
      allowNull: false,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('services', 'status');
  },
};
