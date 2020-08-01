import Sequelize, { Model } from 'sequelize';

class Procedure extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        price: Sequelize.DECIMAL(10, 2),
        duration: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Service, {
      foreignKey: 'procedure_id',
      through: 'service_procedures',
    });
  }
}

export default Procedure;
