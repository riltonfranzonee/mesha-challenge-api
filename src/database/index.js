import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Patient from '../app/models/Patient';
import File from '../app/models/File';
import Procedure from '../app/models/Procedure';
import Problem from '../app/models/Problem';
import Service from '../app/models/Service';

const models = [Patient, File, Service, Procedure, Problem];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
