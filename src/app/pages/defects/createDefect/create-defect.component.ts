import {Component, inject} from "@angular/core";
import {DefectService} from "../../../services/defect.service";
import {FormControl, FormGroup} from "@angular/forms";



  @Component({
    selector: 'app-defect',
    templateUrl: './create-defect.component.html',
    styleUrls: ['./create-defect.component.scss'],
  })




export class CreateDefectComponent {


    private defectService = inject(DefectService)
    form: FormGroup = new FormGroup({
      name: new FormControl(),
    });



    onSave() {
      this.defectService.createDefect({
        name: this.form?.controls["name"].value,
      }).subscribe((response) => {
        console.log(response);
      })
    }
  }

