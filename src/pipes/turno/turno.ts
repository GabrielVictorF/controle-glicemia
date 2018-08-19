import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TurnoPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'turno',
})
export class TurnoPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number) {
  	if (value == 1)
  		return 'Manhã';
  	else if (value == 2)
  		return 'Tarde';
  	else 
  		return 'Noite';
    //return value.toLowerCase();
  }
}
