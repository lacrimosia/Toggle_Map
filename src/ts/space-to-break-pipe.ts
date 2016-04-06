import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'spaceToBreak'})
export class SpaceToBreakPipe implements PipeTransform {
  transform(value: string) {
    return value.replace(/ /g, "<br/>");
  }
}
