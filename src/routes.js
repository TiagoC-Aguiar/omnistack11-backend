const express = require('express')
const crypto = require('crypto')
const connection = require('./database/connection')
const routes = express.Router()

routes.get('/users/:id', (request, response) => {
  // const params = request.query;
  const params = request.params;

  console.log(params)
  return response.json({nome: 'Tiago', email: 'tigo@email.com.br'})
})

routes.post('/ongs', async (request, response) => {
  const { name, email, whatsapp, city, uf } = request.body
  const id = crypto.randomBytes(4).toString('HEX')

  await connection('ongs').insert({
    id,name,email,whatsapp,city,uf
  })

  return response.json({ id })
})

module.exports = routes


