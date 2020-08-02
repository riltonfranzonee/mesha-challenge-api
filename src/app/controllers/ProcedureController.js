import Procedure from '../models/Procedure';

class ProcedureController {
  async store(req, res) {
    const { name, price, duration } = req.body;

    const procedure = await Procedure.findOne({ where: { name } });

    if (procedure) {
      procedure.update({ price, duration });
      return res.json({
        id: procedure.id,
        name,
        price,
        duration,
      });
    }

    const newProcedure = await Procedure.create({
      name,
      price,
      duration,
    });

    return res.json(newProcedure);
  }
}

export default new ProcedureController();
