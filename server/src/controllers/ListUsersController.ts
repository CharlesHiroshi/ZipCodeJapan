import { Request, Response } from 'express'
import knex from '../database/connection'

class ListUsersController {
  async list ( request: Request, response: Response) {
    const users = await knex('users').select('*')
    const serializedUsers = users.map(user => {
      return {
        id: user.id,
        name: user.name,
      }
    })
    return response.json(serializedUsers)
  }
}

export default ListUsersController
