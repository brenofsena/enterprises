import { makeApiUrl } from '@/main/factories/http'
import { SearchEnterprises } from '@/domain/useCases'
import { RemoteSearchEnterprises } from '@/data/usecases'
import { makeAuthorizeHttpGetClientDecorator } from '@/main/factories/decorators'

export const makeRemoteSearchEnterprises = (): SearchEnterprises => {
  return new RemoteSearchEnterprises(
    makeApiUrl('/enterprises'),
    makeAuthorizeHttpGetClientDecorator(),
  )
}
