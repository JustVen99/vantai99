import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vndFormat',
  standalone: true
})
export class VndFormatPipe implements PipeTransform {

  transform(value:number):string {
    const formattedValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return formattedValue + ' VND';
  }

}
