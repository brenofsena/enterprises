import { makeApiUrl } from '@/main/factories/http'
import { LoadEnterprises } from '@/domain/useCases'
import { RemoteLoadEnterprises } from '@/data/usecases'
import { makeAuthorizeHttpGetClientDecorator } from '@/main/factories/decorators'

export const makeRemoteLoadEnterprises= (): LoadEnterprises => {
  return new RemoteLoadEnterprises(makeApiUrl('/enterprises'), makeAuthorizeHttpGetClientDecorator())
}
