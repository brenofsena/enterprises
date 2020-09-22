import faker from 'faker'
import { RemoteLoadEnterpriseDetails } from '@/data/usecases'
import { HttpGetClientSpy, mockRemoteEnterpriseDetails } from '@/data/test'
import { HttpStatusCode } from '@/data/protocols/http'
import { AccessDeniedError, UnexpectedError } from '@/domain/errors'

type SutTypes = {
  sut: RemoteLoadEnterpriseDetails
  httpGetClientSpy: HttpGetClientSpy
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy()
  const sut = new RemoteLoadEnterpriseDetails(url, httpGetClientSpy)

  return {
    sut,
    httpGetClientSpy,
  }
}

describe('RemoteLoadEnterpriseDetails', () => {
  test('Should call HttpGetClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpGetClientSpy } = makeSut(url)
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: mockRemoteEnterpriseDetails(),
    }
    await sut.load()
    expect(httpGetClientSpy.url).toBe(url)
  })

  test('Should throw AccessDeniedError if HttpGetClient returns 403', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.forbidden,
    }
    const promise = sut.load()
    await expect(promise).rejects.toThrow(new AccessDeniedError())
  })

  test('Should throw UnexpectedError if HttpGetClient returns 404', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    }
    const promise = sut.load()
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpGetClient returns 500', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    }
    const promise = sut.load()
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should return a SurveyResult on 200', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    const httpResult = mockRemoteEnterpriseDetails()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    }
    const httpResponse = await sut.load()
    await expect(httpResponse).toEqual({
      photo: httpResult.photo,
      description: httpResult.description,
    })
  })
})
