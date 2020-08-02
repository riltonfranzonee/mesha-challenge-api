import Problem from '../models/Problem';

class ProblemController {
  async store(req, res) {
    const { name } = req.body;

    const problem = await Problem.findOne({ where: { name } });

    if (problem) {
      return res.json(problem);
    }

    const newProblem = await Problem.create({
      name,
    });

    return res.json(newProblem);
  }
}

export default new ProblemController();
