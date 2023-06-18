import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recherche'
})
export class RecherchePipe implements PipeTransform {

  transform(value: any, term: any, place: any): any {
    if (term === null && place === null) {
      return value;
    } else {
      return value.filter((item: any) => {
        const hasTerm = (term === null) || (item.name.includes(term)) || (item.description.includes(term));
        const hasPlace = (place === null) || (item.place === place);
        return hasTerm && hasPlace;
      });
    }
  }
}  
