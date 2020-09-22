import { Authentication } from '@/domain/useCases'
import faker from 'faker'

export const mockAuthentication = (): Authentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): Authentication.Model => ({
  accessToken: faker.random.uuid(),
  client: faker.random.word(),
  uid: faker.random.uuid()
})
