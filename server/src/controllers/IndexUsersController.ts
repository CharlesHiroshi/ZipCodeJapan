import { Request, Response } from 'express'
import knex from '../database/connection'

class IndexUserController {
  async index (request: Request, response: Response) {
    const { prefecture, city } = request.query
    const users = await knex('users').where('prefecture', String(prefecture)).where('city', String(city)).select('users.*')
    if (!users) {
      return response.status(400).json({ message: 'User not found!' })
    }
    return response.json(users)
  }
}

export default IndexUserController