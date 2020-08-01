import Service from '../models/Service';

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

  async update(req, res) {
    const { service_id, problems_id = [], procedures_id = [] } = req.body;

    const service = await Service.findByPk(service_id);

    if (problems_id.length) {
      await service.addProblems(problems_id);
    }

    if (procedures_id.length) {
      await service.addProcedures(procedures_id);
    }

    return res.json({ service });
  }
}

export default new ServiceController();
