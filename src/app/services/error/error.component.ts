import {Component, Inject, Input,} from '@angular/core';
import {ErrorService} from "../error.service";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {

  @Input()
  errors: string[] = [];
  constructor( private errorService: ErrorService) {

  }

  ngOnInit(){
    this.errorService.errors?.subscribe((errors: string[]) =>
      this.errors = errors)
  }

}
