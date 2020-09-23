import faker from 'faker'
import { RemoteSearchEnterprises } from './remote-search-enterprises'
import { HttpGetClientSpy, mockRemoteEnterprisesModel } from '@/data/test'
import { UnexpectedError, AccessDeniedError } from '@/domain/errors'
import { HttpStatusCode } from '@/data/protocols/http'

type SutTypes = {
  sut: RemoteSearchEnterprises
  httpGetClientSpy: HttpGetClientSpy<RemoteSearchEnterprises.Model[]>
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy<RemoteSearchEnterprises.Model[]>()
  const sut = new RemoteSearchEnterprises(url, httpGetClientSpy)

  return {
    sut,
    httpGetClientSpy,
  }
}

describe('RemoteLoadEnterprises', () => {
  test('Should call HttpGetClient with correct url', async () => {
    const url = faker.internet.url()
    const { sut, httpGetClientSpy } = makeSut(url)
    await sut.search('any_search')
    expect(httpGetClientSpy.url).toBe(`${url}?name=any_search`)
  })

  test('Should throw AccessDeniedError if HttpGetClient returns 403', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.forbidden,
    }
    const promise = sut.search('any_search')
    await expect(promise).rejects.toThrow(new AccessDeniedError())
  })

  test('Should throw UnexpectedError if HttpGetClient returns 404', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    }
    const promise = sut.search('any_search')
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpGetClient returns 500', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    }
    const promise = sut.search('any_search')
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should return a list of EnterpriseModels if HttpGetClient returns 200', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    const httpResult = mockRemoteEnterprisesModel()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    }
    const enterprises = await sut.search('any_search')
    await expect(enterprises).toEqual([
      {
        id: httpResult[0].id,
        enterprise_name: httpResult[0].enterprise_name,
        enterprise_type: httpResult[0].enterprise_type,
        city: httpResult[0].city,
        photo: httpResult[0].photo,
      },
      {
        id: httpResult[1].id,
        enterprise_name: httpResult[1].enterprise_name,
        enterprise_type: httpResult[1].enterprise_type,
        city: httpResult[1].city,
        photo: httpResult[1].photo,
      },
    ])
  })

  test('Should return an empty list if HttpGetClient returns 204', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.noContent,
    }
    const enterprises = await sut.search('any_search')
    await expect(enterprises).toEqual([])
  })
})
