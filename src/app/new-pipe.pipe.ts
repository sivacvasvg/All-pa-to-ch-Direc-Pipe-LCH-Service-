import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newPipe'
})
export class NewPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    
    return value +55;
  }

}
