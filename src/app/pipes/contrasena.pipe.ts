import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar:boolean): string {
    if (activar == false){
      return value;
    }else{
      value = value.replace(value, "*******");
      return value;
    }
  }

}
