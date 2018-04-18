import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateChange'
})
export class dateChangePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) return value;

    // switch(value) {
    //   case "faculty": return 'Faculty';
    //   case "post": return 'Post Doctors';
    //   case "doctor": return 'Ph.D Student';
    //   case "master": return 'Master Student';
    //   case "researcher": return 'Researcher';
    //   case "intern": return 'Intern';
    //   case "alumni_phd": return 'Ph.D Almuni';
    //   case "alumni_master": return 'Master Alumni';
    //   case "former": return 'Former Member';
    //   default: return value;
    // }

    let a = value.slice(0,2);
    let b = value.slice(2,4);
    let c = value.slice(4,6);
    return b + '.' + c + '.20' + a;
  }

}