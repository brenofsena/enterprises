import { RemoteLoadEnterprises } from '@/data/usecases'
import faker from 'faker'

export const mockRemoteEnterpriseModel = (): RemoteLoadEnterprises.Model => ({
  id: faker.random.uuid(),
  enterprise_name: faker.company.companyName(),
  enterprise_type: {
    enterprise_type_name: faker.random.word()
  },
  city: faker.address.city(),
  photo: faker.internet.url()
})

export const mockRemoteEnterprisesModel = (): RemoteLoadEnterprises.Model[] => ([
  mockRemoteEnterpriseModel(),
  mockRemoteEnterpriseModel(),
])
