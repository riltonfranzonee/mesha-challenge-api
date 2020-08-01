import Problem from '../models/Problem';

class ProblemController {
  async store(req, res) {
    const { name } = req.body;

    const problem = await Problem.findOne({ where: { name } });

    if (problem) {
      return res.json({ problem_id: problem.id });
    }

    const { id: problem_id } = await Problem.create({
      name,
    });

    return res.json({ problem_id });
  }
}

export default new ProblemController();
