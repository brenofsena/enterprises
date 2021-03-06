import { HttpGetClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError, AccessDeniedError } from '@/domain/errors'
import { LoadEnterprises } from '@/domain/useCases'

export class RemoteLoadEnterprises implements LoadEnterprises {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<RemoteLoadEnterprises.Model[]>,
  ) {}

  async loadAll(search?: string): Promise<LoadEnterprises.Model[]> {
    const url = search ? `${this.url}?name=${search}` : this.url
    const httpResponse = await this.httpGetClient.get({ url })
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

export namespace RemoteLoadEnterprises {
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
