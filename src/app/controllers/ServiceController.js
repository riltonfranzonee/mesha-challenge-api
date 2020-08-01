import Service from '../models/Service';
import Problem from '../models/Problem';
import Procedure from '../models/Procedure';

class ServiceController {
  async index(req, res) {
    const { id } = req.params;

    const service = await Service.findByPk(id, {
      include: [
        {
          association: 'Procedures',
          attributes: ['id', 'name', 'name', 'price', 'duration'],
          through: { attributes: [] },
        },
        {
          association: 'Problems',
          attributes: ['id', 'name'],
          through: { attributes: [] },
        },
      ],
    });

    return res.json({ service });
  }

  async store(req, res) {
    const { patient_id, problems_id, procedures_id } = req.body;

    const service = await Service.create({ patient_id });

    problems_id.map(async id => {
      const problem = await Problem.findByPk(id);
      await service.addProblem(problem);
    });

    procedures_id.map(async id => {
      const procedure = await Procedure.findByPk(id);
      await service.addProcedure(procedure);
    });

    return res.json({ service });
  }
}

export default new ServiceController();
