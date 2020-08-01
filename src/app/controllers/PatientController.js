import Patient from '../models/Patient';
import Service from '../models/Service';

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

    const service = await Service.create({ patient_id: patient.id });

    return res.json({ patient, service });
  }
}

export default new PatientController();
