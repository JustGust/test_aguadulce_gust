import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...arg: any[]): any {
    const resultUser = [];
    for(const user of value) {
      if (user.identification.indexOf(arg) > -1) {
        resultUser.push(user)
      }
    }
  return resultUser;
  }

}
