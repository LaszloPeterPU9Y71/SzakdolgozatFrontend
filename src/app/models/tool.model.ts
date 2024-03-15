export interface Tool {
  id: number;
  name: string ;
  typeNumber: string ;
  itemNumber: string ;
  serialNumber: string ;
  dateOfReceiving: Date;
  status: string ;
  ownerCompanyEmployee: number ;
}

export interface CreateToolRequest{
  name: string ;
  typeNumber: string ;
  itemNumber: string ;
  serialNumber: string ;
  ownerCompanyEmployee: number ;
  defectsId: any[];
}
