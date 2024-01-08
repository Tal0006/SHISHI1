import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseDate'
})
export class ParseDatePipe implements PipeTransform {
  transform(dateString: string): Date | null {
    // Check if the input is a valid date string
    if (!dateString || isNaN(Date.parse(dateString))) {
      console.error('Invalid date string');
      return null;
    }

    // Parse the date string and return a Date object
    const parsedDate = new Date(dateString);
    return parsedDate;
  }
}
