export interface LoadEnterprises {
  loadAll: () => Promise<LoadEnterprises.Model[]>
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
