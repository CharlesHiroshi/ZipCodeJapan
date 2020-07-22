import { Request, Response } from 'express'
import knex from '../database/connection'

class UsersController {
  async create (request: Request, response: Response) {
    const { name, email, phone, zipcode, prefecture, city
    } = request.body

    const trx = await knex.transaction()

    const user = { name, email, phone, zipcode, prefecture, city}
  
    const insertedId = await trx('users').insert(user)

    const userId = insertedId[0]

    await trx.commit()
  
    return response.json({ id: userId, ...user,})
  }
}

export default UsersController