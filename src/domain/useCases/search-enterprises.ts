export interface SearchEnterprises {
  search: (search: string) => Promise<SearchEnterprises.Model[]>
}

export namespace SearchEnterprises {
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
