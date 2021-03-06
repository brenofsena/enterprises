export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 400,
  serverError = 500,
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode
  body?: T
  headers?: any
}
