import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeTitle',
  standalone: false
})
export class EmployeeTitlePipePipe implements PipeTransform {

  transform(value: string, gender: string): string {
    if (gender.toLowerCase() == 'male') {
      return 'Mr. ' + value;
    }
    else {
      return 'Mrs. ' + value;
    }
  }

}
