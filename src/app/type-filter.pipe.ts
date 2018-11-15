import { Pipe, PipeTransform } from '@angular/core';
import { Iitem } from './shared/Iitem';

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {

  public transform(items, typeFilter: string): Iitem {
    if (typeFilter === 'all') {
      return items;
    }
    return items.filter((item) => {
      return item.type.toLowerCase().includes(typeFilter.toLocaleLowerCase());
    });
  }
}
