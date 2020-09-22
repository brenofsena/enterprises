export interface LoadEnterpriseDetails {
  load: () => Promise<LoadEnterpriseDetails.Model>
}

export namespace LoadEnterpriseDetails {
  export type Model = {
    photo: string
    description: string
  }
}
