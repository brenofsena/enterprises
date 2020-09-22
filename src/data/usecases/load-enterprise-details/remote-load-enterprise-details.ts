import { HttpGetClient, HttpStatusCode } from '@/data/protocols/http'
import { AccessDeniedError, UnexpectedError } from '@/domain/errors'
import { LoadEnterpriseDetails } from '@/domain/useCases'

export class RemoteLoadEnterpriseDetails implements LoadEnterpriseDetails {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<RemoteLoadEnterpriseDetails.Model>,
  ) {}

  async load(): Promise<LoadEnterpriseDetails.Model> {
    const httpResponse = await this.httpGetClient.get({ url: this.url })
    const remoteEnterpriseDetails = httpResponse.body
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteEnterpriseDetails
      case HttpStatusCode.forbidden:
        throw new AccessDeniedError()
      default:
        throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadEnterpriseDetails {
  export type Model = {
    photo: string
    description: string
  }
}
