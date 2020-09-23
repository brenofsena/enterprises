import { HttpGetClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError, AccessDeniedError } from '@/domain/errors'
import { SearchEnterprises } from '@/domain/useCases'

export class RemoteSearchEnterprises implements SearchEnterprises {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<RemoteSearchEnterprises.Model[]>,
  ) {}

  async search(search: string): Promise<SearchEnterprises.Model[]> {
    const httpResponse = await this.httpGetClient.get({ url: `${this.url}?name=${search}` })
    const remoteEnterprises = httpResponse.body || []

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteEnterprises
      case HttpStatusCode.noContent:
        return []
      case HttpStatusCode.forbidden:
        throw new AccessDeniedError()
      default:
        throw new UnexpectedError()
    }
  }
}

export namespace RemoteSearchEnterprises {
  export type Model = {
    id: string
    enterprise_name: string
    enterprise_type: {
      enterprise_type_name: string
    }
    city: string
    photo: string
  }
}
