import Patient from '../models/Patient';

class PatientController {
  async store(req, res) {
    const { name, email, phone, birth, avatar_id } = req.body;

    const isRegistered = await Patient.findOne({ where: { email } });

    if (isRegistered) {
      return res.status(400).json({ error: 'Email já cadastrado' });
    }

    const patient = await Patient.create({
      name,
      email,
      phone,
      birth,
      ...(avatar_id ? { avatar_id } : {}),
    });

    return res.json({ patient });
  }
}

export default new PatientController();
