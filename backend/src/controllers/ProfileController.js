const connection = require('../database/connection');

module.exports = {

  // Retornar casos específicos de uma única ONG
  async index(request, response) {

    const ong_id = request.headers.authorization;

    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return response.json(incidents);
  }
}