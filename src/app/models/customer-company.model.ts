export interface ResponseTypes<T>{
  payload: T;
  errors: string[];
  ok: boolean;
}
export interface CustomerCreateRequest {

  name: string;
  telNum: number;
  email: string;
  title: string;
  companyName: string;
}

export interface CustomerCompanyCreateRequest{

  companyName: string;
  postalCode: number;
  town: string;
  street: string;
  taxNumber: string;
  accountNumber: string;

}
