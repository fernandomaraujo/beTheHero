const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

  async index(request, response) {

    // Selecionando todos os registros da tabela ongs
    const ongs = await connection('ongs').select('*');
  
    return response.json(ongs);
  },

  async create(request, response) {

    // Desestruturação
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    // Conexão com banco de dados, pra criação da ONG na devida tabela
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return response.json({ id });
  }
};