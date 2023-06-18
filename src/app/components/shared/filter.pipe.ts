import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString:string, propName:string): any[] {      // laliste et value e et propname et comme et category name
    const Resultat:any=[];
    if(!value || filterString==='' || propName===''){
    return value;
  }
  value.forEach((a:any) => {
    if(a[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
      Resultat.push(a);
    }
  });
  return Resultat;
}
}

