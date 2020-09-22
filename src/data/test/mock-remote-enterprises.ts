import { RemoteLoadEnterprises } from '@/data/usecases'
import { LoadEnterprises } from '@/domain/useCases'
import faker from 'faker'

export const mockRemoteEnterpriseModel = (): RemoteLoadEnterprises.Model => ({
  id: faker.random.uuid(),
  enterprise_name: faker.company.companyName(),
  enterprise_type: {
    enterprise_type_name: faker.random.word()
  },
  city: faker.address.city(),
  photo: faker.random.word()
})

export const mockRemoteEnterprisesModel = (): RemoteLoadEnterprises.Model[] => ([
  mockRemoteEnterpriseModel(),
  mockRemoteEnterpriseModel(),
])

export class LoadEnterprisesSpy implements LoadEnterprises {
  callsCount = 0
  enterprises = mockRemoteEnterprisesModel()

  async loadAll (): Promise<LoadEnterprises.Model[]> {
    this.callsCount++
    return this.enterprises
  }
}
