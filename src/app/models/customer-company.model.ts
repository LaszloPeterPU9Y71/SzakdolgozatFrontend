export interface ResponseTypes<T>{
  payload: T;
  errors: string[];
  ok: boolean;
}

export interface CustomerCompanyCreateRequest{

  companyName: string;
  postalCode: number;
  town: string;
  street: string;
  taxNumber: string;
  accountNumber: string;

}
