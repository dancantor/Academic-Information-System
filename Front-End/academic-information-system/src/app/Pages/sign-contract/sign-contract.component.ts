import { User } from 'src/app/Models/genericUser';
import { ContractDto } from './../../Models/contract-dto';
import { ContractService } from './../../shared/services/contract.service';
import { saveAs } from 'file-saver';
import { ProfileInformation } from 'src/app/Models/student.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpRequestsService } from 'src/app/shared/services/http-requests.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-sign-contract',
  templateUrl: './sign-contract.component.html',
  styleUrls: ['./sign-contract.component.scss']
})
export class SignContractComponent implements OnInit {
  private user: ProfileInformation;
  yearNo1: boolean = true;
  yearNo2: boolean = true;
  fileToSave: File | null = null;
  constructor(private http : HttpRequestsService, private storageService: StorageService, 
    private snackbar: MatSnackBar, private contractService: ContractService) { }

  ngOnInit(): void {
    this.http.getProfileInfoById(this.storageService.getUserId() || '', this.storageService.getUserType()).subscribe((response) => {
      this.user = response;
      this.http.getEnrolledYears(this.user.id).subscribe((response) => {
        if(!response.year1) {
          this.yearNo1 = false;
        }
        if(!response.year2) {
          this.yearNo2 = false;
        }
      }
      )
    }
    )
  }

  openFile(param: number){
    let inputList = document.querySelectorAll('input');
    let input = inputList[param - 1];
    console.log(param);
    if(input){
      input.click();
    }
  }

  selectDocument(fileEvent) {
    this.fileToSave = fileEvent.files[0];
    if (this.fileToSave !== null){
      let contract: ContractDto = {
        studId: parseInt(this.user.id),
        contract: this.fileToSave
      }
      this.contractService.create(contract).subscribe(()=>{
        this.snackbar.open('Contract successfully saved!');
      })

      }
    }
}
