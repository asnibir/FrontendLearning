import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) {
      return null;
    }

    let words = value.split(' ');
    for(let i = 0; i<words.length; i++) {
      if( i > 0 && this.isPreposition(words[i]))
        words[i] = words[i].toLocaleLowerCase();
      else
        words[i] = this.toTitleCase(words[i]);
    }

    return words.join(' ');
  }

  private toTitleCase(word: string): string {
    return word.substring(0, 1).toLocaleUpperCase() + word.substring(1).toLowerCase();
  }

  private isPreposition(word: string): boolean{
    let preposition = [
      'of',
      'the',
      'to',
      'in',
      'from'
    ];
    return preposition.includes(word.toLocaleLowerCase());
  }

}
