import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText',
})
export class ShortTextPipe {
  transform(value: string, args: string): string {
    let limit = args ? parseInt(args, 10) : 10;

    return value.length > limit ? value.substring(0, limit) : value;
  }
}
