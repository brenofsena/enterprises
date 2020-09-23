import faker from 'faker'
import { LoadEnterpriseDetails } from '@/domain/useCases'

export const mockEnterpriseDetailsModel = (): LoadEnterpriseDetails.Model => ({
  enterprise_name: faker.company.companyName(),
  photo: faker.internet.url(),
  description: faker.random.words(),
})

export class LoadEnterpriseDetailsSpy implements LoadEnterpriseDetails {
  callsCount = 0
  enterpriseDetails = mockEnterpriseDetailsModel()

  async load(): Promise<LoadEnterpriseDetails.Model> {
    this.callsCount++
    return this.enterpriseDetails
  }
}
