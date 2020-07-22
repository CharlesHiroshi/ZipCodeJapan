import express, { request, response } from 'express'

const routes = express.Router()

routes.get('/', (request, response) => {
  return response.json({ zipcode: '5203252'})
})

export default routes
