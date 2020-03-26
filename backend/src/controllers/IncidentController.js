const connection = require('../database/connection');

module.exports = {

  async index(request, response) {

    // Buscando parâmetro page, para limirar listagem em x quantidades de casos
    const { page = 1 } = request.query;

    // Pegando quantidade total de casos
    const [count] = await connection('incidents')
      .count();

    // Pegando de 5 em 5 incidentes (pulando de 5 em cinco)
    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1 ) * 5)
      .select([
        'incidents.*', 
        'ongs.name', 
        'ongs.email', 
        'ongs.whatsapp', 
        'ongs.city', 
        'ongs.uf'
      ]);

    // Todos os dados da tabela incidentes e alguns da tabela de ongs

    response.header('X-Total-Count', count['count(*)']);

    return response.json(incidents);
  },


  async create(request, response) {
    const { title, description, value } = request.body;

    // Acessando o ID da ong
    const ong_id = request.headers.authorization;

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    return response.json({ id });
  },

  async delete(request, response) {

    // Pegar o ID do caso, e o ID da ONG
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    // Se não for a própria ONG querendo deletar seu caso
    if(incident.ong_id != ong_id) {
      return response.status(401).json({error: 'Operation not permitted.'});
    }

    // Se deu tudo certo, segue pra deletar
    await connection('incidents').where('id', id).delete();

    return response.status(204).send();
  }
}