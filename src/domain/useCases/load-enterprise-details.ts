export interface LoadEnterpriseDetails {
  load: () => Promise<LoadEnterpriseDetails.Model>
}

export namespace LoadEnterpriseDetails {
  export type Model = {
    enterprise_name: string
    photo: string
    description: string
  }
}
