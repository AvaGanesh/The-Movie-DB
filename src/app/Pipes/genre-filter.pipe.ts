import { Pipe, PipeTransform } from '@angular/core';
import { Movies } from 'src/app/model/popular-movie-response';
@Pipe({
  name: 'genreFilter'
})
export class GenreFilterPipe implements PipeTransform {

  transform(values: any[], genres: number[]): any[] {
    if (genres.length === 0 || genres === null || genres === undefined) {
      return values;
    }


    const updatedValues = [];
    values.forEach((ele) => {
          const arr2Set = new Set(genres);
          if (ele.genre_ids.some(el => arr2Set.has(el))) {
            updatedValues.push(ele);
          }
    });

    return updatedValues;
  }

}
