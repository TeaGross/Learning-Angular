import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatDate' })
export class formatDate implements PipeTransform {
  transform(value: string) {
    const date = new Date(value);
    console.log(date, 'datumobjektet')
    const formattedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate())

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }
}
