import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(values: Array<IUser>, filter: string): any {
    if (!values || !values.length) return [];
    if (!filter) return values;
    filter = filter.toUpperCase();
    if (filter && Array.isArray(values)) {
      const keys = Object.keys(values[0]);
      return values.filter(v => v && keys.some(k => v[k] && v[k].toString().toUpperCase().indexOf(filter) >= 0));
    }
  }
}