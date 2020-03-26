const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// Login de ONG
routes.post('/sessions', SessionController.create);

// Listagem de ONGS
routes.get('/ongs', OngController.index);

// Cadastro de ONG
routes.post('/ongs', OngController.create);

// Listagem de casos específicos de uma ONG
routes.get('/profile', ProfileController.index);

// Listagem de casos
routes.get('/incidents', IncidentController.index);

// Cadastro de casos
routes.post('/incidents', IncidentController.create);

// Deletar os casos
routes.delete('/incidents/:id', IncidentController.delete);

// Deixando as rotas disponíveis para a aplicação
module.exports = routes;