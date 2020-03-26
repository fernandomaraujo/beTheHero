const connection = require('../database/connection');

module.exports = {
  async create(request, response) {

    const { id } = request.body;

    // Buscando ONG
    const ong = await connection('ongs')
      .where('id', id)
      .select('name')
      .first();

    // Se ONG não existir
    if(!ong){
      return response.status(400).json({ error: 'No ONG found with this ID' });
    }

    // Se ONG existe
    return response.json(ong);
  }
}