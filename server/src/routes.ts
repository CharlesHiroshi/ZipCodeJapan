import express, { Request, Response } from 'express'
import UsersController from '../src/controllers/UsersController'
import ListUsersController from '../src/controllers/ListUsersController'
import ShowUserController from '../src/controllers/ShowUserController'
import IndexUsersController from '../src/controllers/IndexUsersController'

const routes = express.Router()

const usersController = new UsersController()
const listUsersController = new ListUsersController()
const showUserController = new ShowUserController()
const indexUsersController = new IndexUsersController()

routes.get('/welcome', async (request: Request, response: Response) => {
  return response.json({ zipcode: '5203252' })
})

routes.post('/sign', usersController.create)

routes.get('/list', listUsersController.list)

routes.get('/show/:id', showUserController.show)

routes.get('/index', indexUsersController.index)

export default routes
