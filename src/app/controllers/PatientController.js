import Patient from '../models/Patient';
import File from '../models/File';
import Service from '../models/Service';

class PatientController {
  async store(req, res) {
    const { name, email, phone, birth, avatar_id } = req.body;

    const isRegistered = await Patient.findOne({ where: { email } });

    if (isRegistered) {
      return res.status(400).json({ message: 'Email já cadastrado' });
    }

    const patient = await Patient.create({
      name,
      email,
      phone,
      birth,
      ...(avatar_id ? { avatar_id } : {}),
    });

    let url;

    if (avatar_id) {
      const file = await File.findByPk(avatar_id);
      url = file.url;
    }

    const service = await Service.create({ patient_id: patient.id });

    return res.json({
      patient: {
        id: patient.id,
        name,
        email,
        phone,
        birth,
        avatar_url: url,
      },
      service,
    });
  }
}

export default new PatientController();
