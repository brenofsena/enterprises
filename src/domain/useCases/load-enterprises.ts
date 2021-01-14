export interface LoadEnterprises {
  loadAll: (search?: string) => Promise<LoadEnterprises.Model[]>
}

export namespace LoadEnterprises {
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
