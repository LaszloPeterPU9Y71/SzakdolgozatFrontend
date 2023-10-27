import {Component, inject, Injectable} from "@angular/core";
import {DefectService} from "../defect.service";
import {FormControl, FormGroup} from "@angular/forms";



  @Component({
    selector: 'app-defect',
    templateUrl: './create-defect.component.html',
    styleUrls: ['./create-defect.component.scss'],
  })




export class CreateDefectComponent {


    private defectService = inject(DefectService)
    form: FormGroup = new FormGroup({
      defectName: new FormControl(),
    });



    onSave() {
      console.log(this.defectService)
      this.defectService.createDefect({
        defectName: this.form?.controls['defectName'].value,
      }).subscribe((response) => {
        console.log(response)
      })
    }
  }

