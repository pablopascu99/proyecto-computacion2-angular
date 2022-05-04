import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if ( arg =='' || arg.lengh < 3) return value;
    const resultPosts = [];
    for(const post of value){
      if(post.nombre_prov.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        console.log('Sip')
        resultPosts.push(post);
      };

    };
    return resultPosts;
  }

}
