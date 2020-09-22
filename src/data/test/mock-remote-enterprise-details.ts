import faker from 'faker'
import { RemoteLoadEnterpriseDetails } from '@/data/usecases'

export const mockRemoteEnterpriseDetails = (): RemoteLoadEnterpriseDetails.Model => ({
  photo: faker.internet.url(),
  description: faker.random.words(),
})
