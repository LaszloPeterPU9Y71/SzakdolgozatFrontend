export interface UserDto{
    id:number;
    name:string;
    telNum:string;
    email:string;
    title:string;
    status: boolean;
    password: string;
    companyId: number;
}

export interface OwnerCompanyEmployeeDto {
    id: number
    name: string;
    telNum: number;
    email: string;
    title: string;
    ownerCompanyId: number;


}

export interface OwnerCompanyDto{

    id: number;
    companyName: string;
    postalCode: number;
    town: string;
    street: string;
    taxNumber: string;
    accountNumber: string;

}

export interface DefectDto {
     id: number
     name: string;

}

export interface SparePartDto {
      partName: string;
      partNumber: string;
      nettoBuyingPrice: number;
      nettoSellingPrice: number;
}

export interface ToolDto {
      id: number;
      name: string ;
      typeNumber: string ;
      itemNumber: string ;
      serialNumber: string ;
      dateOfReceiving: Date;
      status: string ;
      ownerCompanyEmployee: number;
      employeeId: number;
      description: string;
      defects: number;
}

export interface CompanyDto{

  id: number;
  name: string;
  postalCode: number;
  town: string;
  street: string;
  taxNumber: string;

}


