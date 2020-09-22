import { makeApiUrl , makeAxiosHttpClient } from '@/main/factories/http'
import { RemoteAuthentication } from '@/data/usecases'
import { Authentication } from '@/domain/useCases'

export const makeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(makeApiUrl('/users/auth/sign_in'), makeAxiosHttpClient())
}
