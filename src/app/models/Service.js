import { Model } from 'sequelize';

class Service extends Model {
  static init(sequelize) {
    super.init(
      {},
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Patient, { foreignKey: 'patient_id' });

    this.belongsToMany(models.Problem, {
      foreignKey: 'service_id',
      through: 'service_problems',
    });

    this.belongsToMany(models.Procedure, {
      foreignKey: 'service_id',
      through: 'service_procedures',
    });
  }
}

export default Service;
