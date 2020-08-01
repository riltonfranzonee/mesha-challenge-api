import Procedure from '../models/Procedure';

class ProcedureController {
  async store(req, res) {
    const { name, price, duration } = req.body;

    const procedure = await Procedure.findOne({ where: { name } });

    if (procedure) {
      return res.json({ procedure_id: procedure.id });
    }

    const { id: procedure_id } = await Procedure.create({
      name,
      price,
      duration,
    });

    return res.json({ procedure_id });
  }
}

export default new ProcedureController();
