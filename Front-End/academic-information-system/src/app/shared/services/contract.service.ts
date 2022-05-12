import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { ContractDto } from './../../Models/contract-dto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + '/students/upload-contract';

  create (contract: ContractDto) {
    const formData = new FormData();
    formData.append('studid', contract.studId.toString());
    formData.append('contract', contract.contract);

    return this.http.post(this.apiURL, formData);
  }


}
