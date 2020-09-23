import faker from 'faker'
import { RemoteLoadEnterpriseDetails } from '@/data/usecases'

export const mockRemoteEnterpriseDetails = (): RemoteLoadEnterpriseDetails.Model => ({
  enterprise_name: faker.company.companyName(),
  photo: faker.internet.url(),
  description: faker.random.words(),
})
