import {Component, inject} from "@angular/core";
import {SparePartService} from "../spare-part.service";
import {FormControl, FormGroup} from "@angular/forms";



  @Component({
    selector: 'app-spare-part',
    templateUrl: './create-spare-part.component.html',
    styleUrls: ['./create-spare-part.component.scss'],
  })




export class CreateSparePartComponent {


    private sparePartService = inject(SparePartService)
    form: FormGroup = new FormGroup({
      partName: new FormControl(),
      partNumber: new FormControl(),
      nettoBuyingPrice: new FormControl(),
      nettoSellingPrice: new FormControl(),
    });

    onSave() {
      this.sparePartService.createSparePart({
        partName: this.form?.controls['partName'].value,
        partNumber: this.form?.controls['partNumber'].value,
        nettoBuyingPrice: this.form?.controls['nettoBuyingPrice'].value,
        nettoSellingPrice: this.form?.controls['nettoSellingPrice'].value,
      }).subscribe((response) => {
        console.log(response)
      })
    }
  }

