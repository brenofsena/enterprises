import { makeApiUrl } from '@/main/factories/http'
import { LoadEnterpriseDetails } from '@/domain/useCases'
import { RemoteLoadEnterpriseDetails } from '@/data/usecases'
import { makeAuthorizeHttpGetClientDecorator } from '@/main/factories/decorators'

export const makeRemoteLoadEnterpriseDetails = (id: string): LoadEnterpriseDetails => {
  return new RemoteLoadEnterpriseDetails(
    makeApiUrl(`/enterprises/${id}`),
    makeAuthorizeHttpGetClientDecorator(),
  )
}
